import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntasResultados, TestContenidosResultados } from 'src/app/interfaces/test-contenidos-resultados';
import { AuthService } from 'src/app/services/auth.service';
import { SubjectsService } from 'src/app/services/subjects.service';
import { TestDataService } from 'src/app/services/test-data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  subject:any;
  subjectName:string="";
  testName:string="";
  startTest:boolean=false;
  questionNumber:number = 0;
  testSubject:any;
  contentid:number[]=[];
  questions:any=[];
  results:any[]=[];
  sesion:any;
  idc:any;
  preguntasResultados:PreguntasResultados[]=[];
  aprobado:boolean=false;

  constructor( private activatedRoute: ActivatedRoute, private subjects: SubjectsService, private auth:AuthService, private testDataService:TestDataService ) { }

  ngOnInit(): void {
    this.getSesion();
    this.getparams();
    this.getTest();
  }

  getSesion(){
    this.auth.obtenerSesion().then(res=>{
      this.sesion = res;
      console.log("Sesion",this.sesion);

      this.testDataService.esNuevo(this.sesion.email,this.idc,this.testName);
    });
  }

  getparams(){
    this.activatedRoute.params.subscribe(params=>{
      this.subject = this.subjects.getSubject(params.subject);
      this.subjectName = this.subject.name;
      this.idc = params.idc
      this.contentid = this.separaDigitos(params.idc);
      console.log("Parametros",this.contentid);
      
      this.testName  = this.subject.sections[0].parts[this.contentid[1]-1];
    });
  }

  getTest(){
    this.subjects.getTestSubject().subscribe(res=>{
      this.testSubject = res.data();
      console.log("TEST",this.testSubject);
      
      this.enviarPreguntas();
    });
  }

  start(){
    this.startTest = true;
  }

  enviarPreguntas(){

    var contentid = 0;
    if (this.contentid.length < 4) {
      contentid = this.contentid[1];
    } else {
      contentid = this.contentid[2] + 10;
    }
    

    switch (contentid) {
      case 1:
        this.questions = this.testSubject.preguntas_sec1_m1;
        break;
      case 2:
        this.questions = this.testSubject.preguntas_sec1_m2;
        break;
      case 3:
        this.questions = this.testSubject.preguntas_sec1_m3;
        break;
      case 4:
        this.questions = this.testSubject.preguntas_sec2_m1;
        break;
      case 5:
        this.questions = this.testSubject.preguntas_sec2_m2;
        break;
      case 6:
        this.questions = this.testSubject.preguntas_sec2_m3;
        break;
      case 7:
        this.questions = this.testSubject.preguntas_sec3_m1;
        break;
      case 8:
        this.questions = this.testSubject.preguntas_sec3_m1;
        break;
      case 9:
        this.questions = this.testSubject.preguntas_sec3_m3;
        break;
      case 10:
        this.questions = this.testSubject.preguntas_sec4_m1;
        break;
      case 11:
        this.questions = this.testSubject.preguntas_sec4_m1;
        break;
      case 12:
        this.questions = this.testSubject.preguntas_sec5_m1;
        break;
      default:
        this.questions = this.testSubject.preguntas_sec1_m1;
        break;
    }

    console.log("questions",this.questions);
    
  }

  separaDigitos(numero:number):Array<number>{
    var num = numero;
    var digits = [];
    while (num > 0) {
        digits.push(num % 10);
        num = Math.trunc(num / 10);
    }
    digits.reverse();
    return digits;
  }

  questionEmitter(event:any){
    this.questionNumber=this.questionNumber+1;
    console.log("QuestionNumber",this.questionNumber);
    console.log("Results",event);
    this.results = event;
    if(this.questionNumber==10){
      console.log("Finalizado");
      this.crearResultadosPreguntas();
      this.sendResults();
    }
  }

  crearResultadosPreguntas(){
    var correcto = 0;
    var index = 0;
    this.results.forEach(result=>{
      var nuevo:PreguntasResultados = {
        nombre_pregunta: this.questions[index].frase,
        correcto: result
      }
      if (result) {
        correcto++
      }
      this.preguntasResultados.push(nuevo);
      index++;
    });
    if (correcto>=6) {
      this.aprobado=true;
    }
  }

  questionIndicator(index:number){
    if (index<this.questionNumber) {
      if (this.results[index]) {
        return "assets/img/checked.png"
      } else {
        return "assets/img/x-button.png"
      }
    } else {
      return "assets/img/"+index+".png";
    }
  }

  sendResults(){
    var results : TestContenidosResultados = {
      intento : this.testDataService.getIntentos(this.idc),
      tipo_contenido_asignado: "aunno",
      aprobado: this.aprobado,
      preguntas: this.preguntasResultados
    }
    this.testDataService.setResultado(this.sesion.email,this.idc,results);
  }

}
