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
    //void
  }

  //Getters de validaciones
  // get correoValidacion(){
  //   return this.form.controls['correo'].invalid && this.form.controls['correo'].touched;
  // }
  // get password1Validacion(){
  //   return this.form.controls['password1'].invalid && this.form.controls['password1'].touched;
  // }
  // get password2Validacion(){
  //   const pass1 = this.form.controls["password1"].value;
  //   const pass2 = this.form.controls["password2"].value;
  //   return (pass1 === pass2) ? false : true;
  // }
  // get aceptoValidacion(){
  //   return this.form.controls['acepto'].touched && (this.form.controls['acepto'].value == null || this.form.controls['acepto'].value == false);
  // }
  // get matriculaValidacion(){
  //   return this.form.controls['matricula'].invalid && this.form.controls['matricula'].touched;
  // }

  createNewForm(){
    this.form = this.fb.group({
      nombre_completo: ["Ulises Adrian Gómez Rico", [ Validators.required, Validators.minLength(12) ]],
      correo: ["ulises.gomezr@alumno.buap.mx", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$"),
        Validators.minLength(20) ] ],
      password1: ["12345678", [ Validators.required, Validators.minLength(8) ] ],
      password2: ["12345678", [ Validators.required, Validators.minLength(8) ] ],
      matricula: ["201663354", [ Validators.required, Validators.pattern("[0-9]{9}$"),] ],
    });
    // console.log( this.form );
  }

  submitForm(){

    if( this.form.invalid ){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Verifica los datos proporcionados',
        showConfirmButton: true,
        confirmButtonColor: '#3085d6',
        timer: 3000
      });
      this.form.markAllAsTouched();
      
      return;
    }
    
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
      tipo_usuario = "alumnos";
    }else{
      tipo_usuario = "profesores";
    }
   
    //LOG:
    console.log( this.form.value );

    let password: string = this.form.controls["password2"].value;
    let nombre_completo: string = this.form.controls["nombre_completo"].value;
    let matricula: string = this.form.controls["matricula"].value;

    this._authService.nuevoRegistro( correo, password )
      .then(()=>{

        //Obtenemos sesión y actualizamos nombre
        this._authService.obtenerSesion()
          .then( usuario => {
            console.log(usuario);

            this._authService.guardarDatosTemporales( matricula,nombre_completo,tipo_usuario,correo );

            usuario.sendEmailVerification()
              .then(()=>{

                Swal.fire({
                  icon: 'success',
                  title: 'Cuenta creada correctamente',
                  text: "Te enviaremos un correo para que la confirmes.",
                  showConfirmButton: true,
                  confirmButtonText: "Ok",
                  confirmButtonColor: "#28a745",
                }).then( confirm =>{
                  if(confirm.value){
                    this._authService.cerrarSesion();
                    this.router.navigateByUrl("/login");
                  }
                });

              }).catch( (err:any) =>{
                console.log(err, "  No se pudo enviar el correo de verifiación.  ");
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'No se pudo enviar el correo de verifiación.',
                  text: "Intenta nuevamente",
                  showConfirmButton: false,
                  timer: 3000
                });
                this._authService.cerrarSesion();
              });

           }).catch( err =>{
            console.log(err);
            this._authService.cerrarSesion();
          });
      

      }).catch( err =>{
        // console.log("error el registrar", err);
        if( err.code == "auth/email-already-in-use" ){
          // console.log("el correo ya fue registrado");
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El correo ya ha sido registrado',
            showConfirmButton: false,
            timer: 5000
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
