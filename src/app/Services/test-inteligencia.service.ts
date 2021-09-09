import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TestHabilidades } from '../interfaces/test-habilidades';

@Injectable({
  providedIn: 'root'
})
export class TestInteligenciaService {

  constructor(private db:AngularFirestore) { }

  async getQuestions(){
    var questions = [];
    

    var esquema: any = await this.db.collection("question_tests").doc("habilidad_esquema").get().toPromise();
    esquema = this.añadirKeys(esquema);
    
    var lectura: any = await this.db.collection("question_tests").doc("habilidad_lectura").get().toPromise();
    lectura = this.añadirKeys(lectura);

    var video: any = await this.db.collection("question_tests").doc("habilidad_video").get().toPromise();
    video = this.añadirKeys(video);
    
    questions.push(esquema[Math.random() * esquema.length | 0]);
    questions.push(esquema[Math.random() * esquema.length | 0]);
    questions.push(lectura[Math.random() * lectura.length | 0]);
    questions.push(lectura[Math.random() * lectura.length | 0]);
    questions.push(video[Math.random() * video.length | 0]);
    questions.push(video[Math.random() * video.length | 0]);
    

    return questions;
  }

  private añadirKeys(mapa:any){
    var keys: any[] = [];
    var arrayfinal:any;

    keys = Object.keys(mapa.data());
    arrayfinal = Object.values(mapa.data());
    var i = 0
    arrayfinal.forEach((element: { id: any; }) => {
      element.id = keys[i];
      i++;
    });  

    return arrayfinal;
  }

  async sendResultado(email:string,resultadoFinal:TestHabilidades){
    var alumno:any = await this.db.collection("alumnos").doc(email).get().toPromise();
    var arregloTest:any[]=[];
    alumno = alumno.data();
    arregloTest = alumno.test_habilidades;
    arregloTest.push(resultadoFinal);
    alumno.test_habilidades = arregloTest;

    this.db.collection("alumnos").doc(email).set(alumno).then(res=>{
      console.log("testguardado",arregloTest);
    });
    
  }
}
