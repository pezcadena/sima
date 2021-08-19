import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  usuarioLogeado: any = null;
  
  constructor(  private fb:FormBuilder,
                private _authService: AuthService,
                private router: Router )
  {
    this.crearFormulario();
    this.obtenerSesion();
  }

  ngOnInit(): void {/**/}

  // getters validadores
  // get correoInvalido(){
  //   return this.form.get("correo").invalid && this.form.get("correo").touched;
  // }
  // get passwordInvalido(){
  //   return this.form.get("password").invalid && this.form.get("password").touched;
  // }

  cerrarSesion(){
    this._authService.cerrarSesion();
  }

  crearFormulario(){
    this.form = this.fb.group({
      correo: ["", [ 
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$"),
        Validators.minLength(12)] ],
      password: ["", [Validators.required, Validators.minLength(8)] ],
    });
    // console.log("el formulario creado: ", this.form);
  }

  obtenerSesion(){
    this._authService.obtenerSesion()
      .then( usuario =>{
        console.log(usuario);
        this.usuarioLogeado = usuario;
        this.verificarSesion();
      }).catch( err =>{
        console.log(err);
        this.usuarioLogeado = null;
        this.verificarSesion();
      });
  }

  // Función que revisa si existe algún usuario logeado
  // para poder redireccionarlo
  verificarSesion(){
    if( this.usuarioLogeado == null ){
      console.log("No existe usuario logeado...");
      // return;
    }else{
      // Verificar si el usuario ya confirmo su correo
      // if( this.verificarCorreoConfirmado() ){
        // console.log("redirecciono al usuario");
        this.router.navigateByUrl("/homeStudent");
      // }else{
      //   return;
      // }
    }
  }

  submitForm(){
    console.log( this.form.value );
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

    let correo: string = this.form.controls["correo"].value;
    let password: string = this.form.controls["password"].value;

    this._authService.iniciarSesion( correo, password)
      .then(()=>{
        this.obtenerSesion();
      })
      .catch( err =>{
        if( err.code == "auth/user-not-found"){
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El correo proporcionado no esta registrado',
            showConfirmButton: false,
            timer: 3000
          });
        }else{
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Verifica los datos proporcionados',
            showConfirmButton: false,
            timer: 3000
          });
        }
        console.log("error al iniciar ", err);
        console.log("tipo de error :  ", err.code);
      })

  }

}
