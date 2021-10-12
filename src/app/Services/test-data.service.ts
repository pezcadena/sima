import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TestContenidos } from '../interfaces/test-contenidos';
import { TestContenidosResultados } from '../interfaces/test-contenidos-resultados';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {

  public infoMaterias:any;

  constructor(private db: AngularFirestore) { }

  esNuevo(email:string,idc:string,nombreTema: string,nrc:string){
    this.db.collection("alumnos").doc(email).collection("materias").doc(nrc).get().toPromise().then(res=>{
      var materia = res.data();
      if (materia![idc]) {
        console.log("Existe");
        this.infoMaterias = materia;
      }
      else{
        console.log("No Existe"); 
        this.crearTestContenido(email,idc,nombreTema,nrc);
      }
    });
  }

  async crearTestContenido(email:string,idc:string, nombreTema: string,nrc:string){

    var res = await this.db.collection("alumnos").doc(email).collection("materias").doc(nrc).get().toPromise();

    var nuevo = res.data();

    var fecha = new Date();
    var estructura : TestContenidos = {
      fecha_inicio : fecha,
      fecha_termino : fecha,
      unidad: 1,
      tema: 1,
      material: 1,
      nombre_tema: nombreTema,
      tema_aprobado: false,
      resultados : []
    }

    nuevo![idc] = estructura;
    this.infoMaterias = nuevo;
    this.db.collection("alumnos").doc(email).collection("materias").doc(nrc).set(nuevo!).then(res=>{
      console.log("crearestructura",res);
    });
  }

  getIntentos(idc:string){
    return this.infoMaterias[idc].resultados.length + 1;
    
  }

  setResultado(email:string,idc:string, resultado:TestContenidosResultados,nrc:string){
    this.infoMaterias[idc].resultados.push(resultado);
    if (resultado.aprobado) {
      this.infoMaterias[idc].tema_aprobado = true;
      var termino = new Date;
      this.infoMaterias[idc].fecha_termino = termino;
    }
    this.db.collection("alumnos").doc(email).collection("materias").doc(nrc).set(this.infoMaterias);
  }

}
