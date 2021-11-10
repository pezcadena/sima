import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntasResultados, TestContenidosResultados } from 'src/app/interfaces/test-contenidos-resultados';
import { MateriasActivas, Usuario } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { SubjectsService } from 'src/app/services/subjects.service';
import { TestDataService } from 'src/app/services/test-data.service';
import { Subject } from 'src/app/interfaces/subject';
import { Materia } from 'src/app/interfaces/materias';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  infoMateriaLocal:any;
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

  basicDataUser!: Usuario;
  materiaActiva! : MateriasActivas;
  idMateria!:string;
  materia!: Materia;

  constructor( private activatedRoute: ActivatedRoute, 
              private _subjectsService: SubjectsService, 
              private _authService:AuthService, 
              private _testDataService:TestDataService 
              ) { }

  ngOnInit(): void {
    this.getSesion();
    this.getparams();
    this.getBasicData();
  }

  getSesion(){
    this._authService.obtenerSesion().then(res=>{
      this.sesion = res;
    });
  }
  
  getparams(){
    this.activatedRoute.params.subscribe(params=>{
      this.infoMateriaLocal = this._subjectsService.getInfoMateriaLocal(params.subject);
      this.idMateria = params.subject;
      this.subjectName = this.infoMateriaLocal.name;
      this.idc = params.idc
      this.contentid = this.separaDigitos(params.idc);
      console.log("contentid",this.contentid);
    });
  }

  getBasicData(){
    this._authService.subscribeUserBasicData().then( async ()=>{
      this.basicDataUser = this._authService.getUserBasicData();
      console.log( "basicaDataUser",this.basicDataUser );
      this.setMateriaActiva();
      this.materia = await this._subjectsService.getMateriaBase(this.idMateria).then();

      //Rellena variables locales
      this.testName  = this.infoMateriaLocal.sections[this.materiaActiva.unidad-1].parts[this.contentid[1]-1];
      this._testDataService.esNuevo(this.sesion.email,this.idc,this.testName,this.materia.nrc);
      //Obtienen las preguntas de la base
      this.getTest();
    } );
  }

  setMateriaActiva(){
    this.materiaActiva = this.basicDataUser.materias_activas?.find((materia:MateriasActivas) => materia.id_materia == this.idMateria) as MateriasActivas;
  }


  getTest(){
    this._subjectsService.getTestSubject( this.materia.id_contenido ).subscribe(res=>{
      this.testSubject = res.data();
      console.log("TEST",this.testSubject);
      
      this.enviarPreguntas();
    });
  }

  start(){
    this.startTest = true;
  }

  // LA FORMA EN LA SE SELECIONAN LAS PREGUNTAS DEBE MEJORAR
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
    if (correcto>=8) {
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
      return "assets/img/"+(index+1)+".png";
    }
  }

  sendResults(){
    
    let temporal = this.basicDataUser.test_habilidades.slice();

    var results : TestContenidosResultados = {
      intento : this._testDataService.getIntentos(this.idc),
      tipo_contenido_asignado: temporal.pop().contenido,
      aprobado: this.aprobado,
      preguntas: this.preguntasResultados
    }

    if ( this.aprobado ) {
      this.basicDataUser.materias_activas![this.materiaActiva.unidad-1].tema++;
      this._authService.guardarDatosBasicosUsuario(this.basicDataUser);
    }

    this._testDataService.setResultado(this.sesion.email,this.idc,results,this.materia.nrc);
  }

}
