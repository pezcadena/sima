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
    Object.assign( nuevaMateria, { lista_alumnos:[] } );
    return this.db.collection( "materias" ).add( nuevaMateria );

  }

  eliminarMateriaAdmin( idMateria:string ){
    return this.db.collection("materias").doc( idMateria ).delete();
  }

  registrarAlumnoAMateria( idMateria:string, matricula_alumno:string ){

    this.db.collection( "materias" ).doc( idMateria ).get()
      
      .subscribe( (resp:any) => {

        const listaMatriculas:[] = resp.data().lista_alumnos;
        this.db.collection("materias").doc( idMateria ).update({
          lista_alumnos: [ ...listaMatriculas, matricula_alumno ]
        }).then(()=>{
          this.db.collection('matriculas').doc( matricula_alumno ).get().subscribe( (resp2:any) => {

            const email = resp2.data().email;
            this.db.collection('alumnos').doc( email ).update({
              materias_activas: [{
                id_materia: idMateria,
                unidad: 0,
                tema: 0,
                material: 0
              }]
            }).then(()=>{
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Matricula registrada correctamente.',
                showConfirmButton: true,
                confirmButtonColor: '#3085d6',
                timer: 3000
              });
            })
          });
        })
        
        .catch( error => {
          console.log( error ); 
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Problemas al crear la materia, intenta nuevamente.',
            showConfirmButton: true,
            confirmButtonColor: '#3085d6',
            timer: 3000
          });
        });

      });
    


    
  }


  // buscarMatricula( matricula:string ){

  //   return this.db.collection('matriculas').doc( matricula ).get();

  // }


}
