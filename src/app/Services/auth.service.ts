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
    return new Promise( (resolve,reject) =>{
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

}
