import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from 'src/app/services/subjects.service';

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
  questions=[];
  results:any[]=[];

  constructor( private activatedRoute: ActivatedRoute, private subjects: SubjectsService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.subject = this.subjects.getSubject(params.subject);
      this.subjectName = this.subject.name;
      this.contentid = this.separaDigitos(params.idc);
      console.log("IDC",this.contentid);
      
      this.testName  = this.subject.sections[0].parts[this.contentid[1]-1];
    });

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
    switch (this.contentid[1]) {
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
        this.questions = this.testSubject.preguntas_sec4_m1;
        break;
      case 9:
        this.questions = this.testSubject.preguntas_sec5_m1;
        break;
      case 10:
        this.questions = this.testSubject.preguntas_sec1_m1;
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

}
