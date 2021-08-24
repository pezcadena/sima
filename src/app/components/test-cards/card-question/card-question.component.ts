import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-question',
  templateUrl: './card-question.component.html',
  styleUrls: ['./card-question.component.scss']
})
export class CardQuestionComponent implements OnInit {

   @Input() question:any;
   @Input() questionNumber:any;
   @Output() emitter = new EventEmitter<any>();
   answers:any[]= [];
   result:any[]= [];

  constructor() { }

  ngOnInit(): void {
    this.shuffleAns();
  }

  shuffleAns(){
    this.answers = [];
    console.log("question",this.question);
    this.answers.push(this.question.respuesta_Correcta);
    this.question.respuesta_Falsas.forEach((element: any) => {
      this.answers.push(element);
    });
    console.log("ans",this.answers);
    this.answers = this.answers
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
    console.log("random ans",this.answers);
  }

  next(index:number){

    if (this.answers[index] == this.question.respuesta_Correcta) {
      console.log("CORRECTO");
      this.result.push(true);      
    } else {
      console.log("INCORRECTO");
      this.result.push(false);
    }

    if (this.questionNumber < 10) {
      this.emitter.emit(this.result);  
    }
  }

  ngOnChanges(){
    this.shuffleAns();
  }

}
