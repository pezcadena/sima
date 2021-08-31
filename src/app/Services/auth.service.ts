import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(  private fireAuth: AngularFireAuth,
                private db: AngularFirestore ) {}


  nuevoRegistro( correo:string, password:string ):Promise<any>  {
    return this.fireAuth.createUserWithEmailAndPassword(correo, password);
  }

  obtenerSesion():Promise<any>{
    return new Promise( (resolve,reject) => {
      this.fireAuth.onAuthStateChanged( (usuario) =>{
        if ( usuario ) {
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
    return this.fireAuth.signOut();
  }

  // enviarCorreoVerificacion():Promise<any> {
    // console.log("enviando correo de verificación...");

    // return new Promise( (resolve,reject) =>{
    //   this.fireAuth.onAuthStateChanged( (usuario) =>{
        
    //     usuario.sendEmailVerification()
    //     .then(()=>{
    //       resolve("Correo de verifiación enviado.");
    //     }).catch( err =>{
    //       // console.log("No se pudo enviar el correo de verifiación.");
    //       reject(err);
    //     });
        
    //   });
    // });
  // }

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

  crearNodoBase( matricula:string, nombre_completo:string, tipo_usuario:string,){
    this.db.collection(tipo_usuario).doc(matricula).set({
      matricula,
      nombre_completo,
      ultimo_acceso: Date.now()
    });
  }

}
