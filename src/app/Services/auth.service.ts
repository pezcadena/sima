import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(  private fireAuth: AngularFireAuth,
                private db: AngularFirestore ) {}

  sesionUsuario:any = null;


  /*===========================================================
        Métodos para sesiones
  ===========================================================*/
  nuevoRegistro( correo:string, password:string ):Promise<any>  {
    return this.fireAuth.createUserWithEmailAndPassword(correo, password);
  }

  obtenerSesion():Promise<any>{
    return new Promise( (resolve,reject) => {
      this.fireAuth.onAuthStateChanged( (usuario:any) =>{
        if ( usuario ) {
          let obj_usuario = new Object({
            displayName: usuario.displayName,
            email: usuario.email,
            photoURL: usuario.photoURL,
            lastSignInTime: usuario.metadata.b,
          });
          this.sesionUsuario = obj_usuario;
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
    this.sesionUsuario = null;
    return this.fireAuth.signOut();
  }

  /*===========================================================
        MEtodos para creación de usuario nuevo
  ===========================================================*/
  guardarDatosTemporales( matricula:string, nombre_completo:string, tipo_usuario:string, correo:string ) {
    this.db.collection("usuarios_temporales").doc( correo ).set({
      nombre_completo,
      tipo_usuario,
      matricula
    });
  }

  async obtenerDatosTemporales( correo:string ) {
    return this.db.collection("usuarios_temporales").doc( correo ).get();
  }

  borrarDatosTemporales(){
    /*===========================================================
          PRUEBAS
    ===========================================================*/
    this.db.collection("usuarios_temporales").doc( "ulises.gomezr@alumno.buap.mx" ).update({


    });
    // this.db.collection("alumnos").doc( "201663354"  ).collection("materias").doc("nrc_12345").get().subscribe( (data) => {
    //   //LOG:
    //   console.log( data.data() );
    // });
  }

  crearNodoBase( matricula:string, nombre_completo:string, tipo_usuario:string, email:string){
    this.db.collection(tipo_usuario).doc(email).set({
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
        }],
    });
  }

  /*===========================================================
        Metodos para recuperar y actualizar información del usuario
  ===========================================================*/

  obtenerDatosUsuario( email:string ){

  }

}
