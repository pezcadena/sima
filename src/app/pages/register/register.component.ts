import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;


  constructor(  private fb:FormBuilder,
                private _authService: AuthService,
                private router: Router ){
                  
    this.createNewForm();

  }

  ngOnInit(): void {

  }

  //Getters de validaciones
  get correoValidacion(){
    return this.form.controls['correo'].invalid && this.form.controls['correo'].touched;
  }
  get password1Validacion(){
    return this.form.controls['password1'].invalid && this.form.controls['password1'].touched;
  }
  // get password2Validacion(){
  //   const pass1 = this.form.get("password1").value;
  //   const pass2 = this.form.get("password2").value;
  //   return (pass1 === pass2) ? false : true;
  // }
  get aceptoValidacion(){
    return this.form.controls['acepto'].touched && (this.form.controls['acepto'].value == null || this.form.controls['acepto'].value == false);
  }

  createNewForm(){
    this.form = this.fb.group({
      nombre_completo: ["Ulises Adrian Gómez Rico", [ Validators.required, Validators.minLength(5) ]],
      correo: ["ulises.gomezr@alumno.buap.mx", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$"),
        Validators.minLength(12) ] ],
      password1: ["12345678", [ Validators.required, Validators.minLength(8) ] ],
      password2: ["12345678", [ Validators.required, Validators.minLength(8) ] ],
      matricula: ["201663354", [ Validators.required, Validators.minLength(9) ] ],
    });
    // console.log( this.form );
  }

  submitForm(){
    console.log( this.form.valid );
    
    // Validación de la extensión del correo
    let correo = this.form.controls['correo'].value;
    let array_correo = correo.split("@");
    let tipo_usuario:string = "";

    if( array_correo[1] != "alumno.buap.mx" && array_correo[1] != "correo.buap.mx" ){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Por favor ingresa tu correo institucional',
        showConfirmButton: false,
        timer: 3000
      });
      return ;
    }

    let array_terminacion = array_correo[1].split(".");
      
    if( array_terminacion[0] === 'alumno' ){
      tipo_usuario = "alumno";
    }else{
      tipo_usuario = "profesor";
    }
   
    if( this.form.invalid ){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Verifica los datos proporcionados',
        showConfirmButton: false,
        timer: 3000
      });
      this.form.markAllAsTouched();
      
      return;
    }

    let password: string = this.form.controls["password2"].value;

    this._authService.nuevoRegistro( correo, password )
      .then(()=>{

        // this._authService.enviarCorreoVerificacion()
        //   .then( resp =>{
        //     // console.log( resp )
        //   }).catch( err =>{
        //     // console.log(err)
        //   });
        
        Swal.fire({
          icon: 'success',
          title: 'Cuenta creada correctamente',
          text: "Te enviaremos un correo para que la confirmes.",
          showConfirmButton: true,
          confirmButtonText: "Ok",
          confirmButtonColor: "#28a745",
        }).then( confirm =>{
          if(confirm.value){
            // this._authService.cerrarSesion();
            this.router.navigateByUrl("/login")
          }
        })
      }).catch( err =>{
        // console.log("error el registrar", err);
        if( err.code == "auth/email-already-in-use" ){
          // console.log("el correo ya fue registrado");
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El correo ya ha sido registrado',
            showConfirmButton: false,
            timer: 3000
          });
        }else{
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Problemas al crear la cuenta...',
            text: "Intenta nuevamente",
            showConfirmButton: false,
            timer: 3000
          })
        }
      });
  }


}
