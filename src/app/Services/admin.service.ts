import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  
  constructor(  private fireAuth: AngularFireAuth,
                private db: AngularFirestore ) {}



  obtenerMateriasAdmin(){

    // return new Promise( (resolve,reject) =>{
      return this.db.collection( "materias" ).get();
      
      // .subscribe( (querySnapshot) => {
        
        
      //     querySnapshot.forEach((doc) => {
      //         // doc.data() is never undefined for query doc snapshots
      //         console.log(doc.id, " => ", doc.data());
      //     });
      
      // });
    
    // });
  }
  

  crearMateriaAdmin( nuevaMateria:Object ){

    return this.db.collection( "materias" ).add( nuevaMateria );

  }

  eliminarMateriaAdmin( idMateria:string ){
    return this.db.collection("materias").doc( idMateria ).delete();
  }

}
