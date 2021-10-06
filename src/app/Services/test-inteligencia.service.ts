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
    questions.push(lectura[Math.random() * lectura.length | 0]);
    questions.push(video[Math.random() * video.length | 0]);
    questions.push(esquema[Math.random() * esquema.length | 0]);
    questions.push(lectura[Math.random() * lectura.length | 0]);
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

  crearResultados( results:any[],fecha:Date ){
    // Recordatorio de que los tipos de inteligencia son;
    // 1: Lectura
    // 2: Video
    // 3: Esquema

    let arregloIntelegencias = [];
    let contenido = 1;

    if ( results[0].respuesta && results[3].respuesta ) {
      console.log("Esquema");
      arregloIntelegencias.push(3);
    }
    if ( results[1].respuesta && results[4].respuesta ) {
      console.log("Lectura");
      arregloIntelegencias.push(1);
    }
    if ( results[2].respuesta && results[5].respuesta ) {
      console.log("Video");
      arregloIntelegencias.push(2);
    }

    switch ( arregloIntelegencias.length ) {
      case 0:
        arregloIntelegencias = [1,2,3];
        contenido = arregloIntelegencias[Math.random() * arregloIntelegencias.length | 0];
        break;
      case 1:
        contenido = arregloIntelegencias[0];
        break;
      default:
        contenido = arregloIntelegencias[Math.random() * arregloIntelegencias.length | 0];
        break;
    }
    console.log("Contenido",contenido);
    

    let resultadosFinales = {
      fecha_test : fecha,
      p1_esquema : results[0],
      p2_lectura : results[1],
      p3_video : results[2],
      p4_esquema : results[3],
      p5_lectura : results[4],
      p6_video : results[5],
      contenido: contenido
    }

    return resultadosFinales;
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
