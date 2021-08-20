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
  questions=[]

  constructor( private activatedRoute: ActivatedRoute, private subjects: SubjectsService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.subject = this.subjects.getSubject(params.subject);
      this.subjectName = this.subject.name;
      this.contentid = this.separaDigitos(params.idc);
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

}
