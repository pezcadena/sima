import { Component, OnInit } from '@angular/core';
import { RespuestaHabilidades, TestHabilidades } from 'src/app/interfaces/test-habilidades';
import { AuthService } from 'src/app/services/auth.service';
import { TestInteligenciaService } from 'src/app/services/test-inteligencia.service';

@Component({
  selector: 'app-test-inteligencias',
  templateUrl: './test-inteligencias.component.html',
  styleUrls: ['./test-inteligencias.component.scss']
})
export class TestInteligenciasComponent implements OnInit {
  
  sesion:any;
  startTest:boolean=false;
  questionNumber:number=0;
  questions:any;
  results:RespuestaHabilidades[]=[];
  fecha = new Date() 
  resultadosFinales: TestHabilidades={};

  constructor(
    private _testIntelifenciaService:TestInteligenciaService,
    private _auth:AuthService
    ) { }

  ngOnInit(): void {
    this.getQuestions(); 
    this.getSesion();
  }

  getSesion(){
    this._auth.obtenerSesion().then(res=>{
      this.sesion = res;
    });
  }

  getQuestions(){
    this._testIntelifenciaService.getQuestions().then(res=>{
      this.questions = res;
      console.log("Preguntas",this.questions);
    })
  }

  start(){
    this.startTest = true;
  }

  questionEmitter(event:RespuestaHabilidades[]){
    this.results = event;
    console.log("RESULTS",this.results);
    this.questionNumber++;

    if(this.questionNumber == 6){
      console.log("FINALIZADO");
      this.crearResultados();
      this._testIntelifenciaService.sendResultado(this.sesion.email,this.resultadosFinales);
    }
  }

  crearResultados(){

    this.resultadosFinales = {
      fecha_test : this.fecha,
      p1_esquema : this.results[0],
      p2_lectura : this.results[1],
      p3_video : this.results[2],
      p4_esquema : this.results[3],
      p5_lectura : this.results[4],
      p6_video : this.results[5],
      contenido: "aunnofuncionajaja"
    }
  }


}
