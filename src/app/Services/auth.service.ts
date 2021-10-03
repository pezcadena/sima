import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(  private fireAuth: AngularFireAuth,
                private db: AngularFirestore ) {}



  /*===========================================================
   //*     Métodos para sesiones
  ===========================================================*/
  nuevoRegistro( correo:string, password:string ):Promise<any> {
    return this.fireAuth.createUserWithEmailAndPassword(correo, password);
  }

  obtenerSesion():Promise<any>{
    return new Promise( (resolve,reject) => {
      this.fireAuth.onAuthStateChanged( async (usuario:any) =>{
        if ( usuario ) {
          // let obj_usuario:any = new Object({
          //   displayName: usuario.displayName,
          //   email: usuario.email,
          //   photoURL: usuario.photoURL,
          //   lastSignInTime: usuario.metadata.b,
          // });
          localStorage.setItem( 'displayName', usuario.displayName );
          localStorage.setItem( 'email', usuario.email );
          localStorage.setItem( 'photo', usuario.photoURL );
           (await this.obtenerDatosTemporales(usuario.email)).subscribe(  (res:any) => {
            localStorage.setItem( 'tipo_usuario', res.data().tipo_usuario );
            localStorage.setItem( 'matricula', res.data().matricula );
          });
          resolve(usuario);
        } else {
          // console.log("no existe usuario");
          reject("no-existe-usuario");
        }
      });
    });
  }

  iniciarSesion( correo:string, password:string ):Promise<any> {
    return this.fireAuth.signInWithEmailAndPassword(correo, password);
  }

  cerrarSesion():Promise<void>{
    localStorage.clear();
    return this.fireAuth.signOut();
  }

  /*===========================================================
   //*     MEtodos para creación de usuario nuevo
  ===========================================================*/
  guardarDatosTemporales( matricula:string, nombre_completo:string, tipo_usuario:string, correo:string ) {
    this.db.collection("usuarios_temporales").doc( correo ).set({
      nombre_completo,
      tipo_usuario,
      matricula
    });
  }

  async obtenerDatosTemporales( correo:string )  {
    return this.db.collection("usuarios_temporales").doc( correo ).get();
  }

  //!Terminar
  borrarDatosTemporales(){
    /*===========================================================
     //*     PRUEBAS
    ===========================================================*/

    this.db.collection( "matriculas" ).doc( "201512345" ).set({
      hola: "hola"
    });


    // this.db.collection("usuarios_temporales").doc( "ulises.gomezr@alumno.buap.mx" ).update({


    // });
    // this.db.collection("alumnos").doc( "201663354"  ).collection("materias").doc("nrc_12345").get().subscribe( (data) => {
    //   //LOG:
    //   console.log( data.data() );
    // });
  }

  crearNodoBase( matricula:string, nombre_completo:string, tipo_usuario:string, email:string){
    let usuarioNuevo:any = {
      matricula,
      nombre_completo,
      tipo_usuario,
      email,
      avisos: [{mensaje:"Bienvenido a SIMA",visto:false}],
      conexiones: [],
      test_habilidades: [{
        fecha_test:"1631030686",
        p1_esquema: ["E001","matematica",true],
        p2_lectura: ["L030","linguistica",false],
        p3_video: ["V013","visual",false],
        p4_esquema: ["E005","kinestesica",true],
        p5_lectura: ["L004","interpersonal",false],
        p6_video: ["V001","musical",true],
        contenido: "esquema"
        }]
    }

    if( tipo_usuario === "profesores" ){
      delete usuarioNuevo.test_habilidades;
      delete usuarioNuevo.conexiones;
    }

    this.db.collection(tipo_usuario).doc(email).set(usuarioNuevo);
    this.db.collection( "matriculas" ).doc( matricula ).set({
      email
    });
  }

//*===========================================================
//* Funciones del usuario
//*===========================================================
  setNuevoPassword ( password:string ) {

    this.fireAuth.onAuthStateChanged( (usuario:any) =>{
      usuario.updatePassword(password)
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'La contraseña se actualizo correctamente. ',
          showConfirmButton: true,
          confirmButtonColor: '#3085d6',
          timer: 5000
        });

      }).catch( (error:any) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Problemas al actualizar la contraseña, intenta nuevamente.',
          showConfirmButton: true,
          confirmButtonColor: '#3085d6',
          timer: 5000
        });
        //LOG:
        console.log( error );
      });
    })
 
    
  }

  obtenerDatosBasicosUsuario():Promise<any> {

    return new Promise( (resolve,reject) =>{
      const email:string | null = localStorage.getItem("email") ;
      const tipo_usuario:string | null = localStorage.getItem("tipo_usuario");
      if( email !== null && tipo_usuario !== null ){
         this.db.collection( tipo_usuario ).doc( email ).get().subscribe( resp =>{
          resolve( resp.data() );
        })
      }else{
        reject(null);
      }
    });
  }

}
