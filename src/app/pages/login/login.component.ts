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
  datosUsuarioLogeado: any = null;
  
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
      correo: ["ulises.gomezr@alumno.buap.mx", [ 
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,3}$"),
        Validators.minLength(20)] ],
      password: ["12345678", [Validators.required, Validators.minLength(8)] ],
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
        console.log("No existe usuario logeado...");
        return;
      });
  }

  // Función que revisa si existe algún usuario logeado
  // para poder redireccionarlo
  async verificarSesion(){

     (await this._authService.obtenerDatosTemporales( this.usuarioLogeado.email )).subscribe( async(res:any) => {
      console.log( res.data() );
      this.datosUsuarioLogeado = res.data();
      
      localStorage.setItem('tipo_usuario',res.data().tipo_usuario);
      localStorage.setItem('nombre_completo',res.data().nombre_completo);

      // Verificar si el usuario ya confirmo su correo
      if( await this.verificarCorreoConfirmado() ){
        console.log("redirecciono al usuario");
        if ( this.datosUsuarioLogeado.tipo_usuario === "alumnos" ){
          this.router.navigateByUrl("/homeStudent");
        }else{
          this.router.navigateByUrl("/homeProfessor");
        }
      }else{
        return;
      }

    });
     
  }

  submitForm(){
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

  async verificarCorreoConfirmado():Promise<boolean> {
    console.log( 'verificando correo confirmado' );

    return new Promise( async (resolve) => {
      if( this.usuarioLogeado.emailVerified === false){
        Swal.fire({
         title: '¡Ups..!',
         icon: 'info',
         html: `<p> No has confirmado tu correo. </p>
                <p><strong> ${this.usuarioLogeado.email} </strong></p>
                <p> Confirmalo para poder accesar. </p>`,
         showConfirmButton: true,
         confirmButtonColor: '#17a2b8',
         confirmButtonText: 'Solicitar otro correo',
         showCancelButton: true,
         cancelButtonColor: '#28a745',
         cancelButtonText: 'Ok'
       }).then( resp =>{
         if( resp.value ){
           // console.log("solicitar otro");
           this.usuarioLogeado.sendEmailVerification();
         }
       });
       resolve( false );
     }else{
 
       /*===========================================================
             El usuario ya verifico su correo
       ===========================================================*/
 
       console.log( 'Configurando primer inicio...' );
       if( this.usuarioLogeado.displayName === null ){
         Swal.fire({
           titleText: "Configurando primer inicio...",
           html: ` <i class="fas fa-spinner fa-spin fa-3x"></i> `,
           showCloseButton: false,
           showCancelButton: false,
           showConfirmButton: false,
           allowOutsideClick: false
         });
 
         await this.actualizarDatosUsuario().then( ()=>{
           Swal.close();
           resolve( true );

         })
         
        }else{
          resolve( true );
        }
        
     }
    });
    
    
  }

  async actualizarDatosUsuario():Promise<boolean> {
    console.log( 'actualizando datos' );
    
    return new Promise( (resolve)=>{

       this.usuarioLogeado.updateProfile({
        displayName: this.datosUsuarioLogeado.nombre_completo,
        photoURL: "https://firebasestorage.googleapis.com/v0/b/sima-web-fcc.appspot.com/o/fcc_logo.png?alt=media&token=3e04a5c1-e726-4ba6-a244-a639265e6667"
      }).then(() => {
        // Update successful
        this._authService.crearNodoBase( this.datosUsuarioLogeado.matricula,  this.datosUsuarioLogeado.nombre_completo, this.datosUsuarioLogeado.tipo_usuario );
        resolve( true );
      }).catch((error:any) => {
        // An error occurred
        resolve( true );
      });
    });
  }

}
