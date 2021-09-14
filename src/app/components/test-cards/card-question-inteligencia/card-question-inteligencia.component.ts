import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RespuestaHabilidades } from 'src/app/interfaces/test-habilidades';

@Component({
  selector: 'app-card-question-inteligencia',
  templateUrl: './card-question-inteligencia.component.html',
  styleUrls: ['./card-question-inteligencia.component.scss']
})
export class CardQuestionInteligenciaComponent implements OnInit {

  @Input() question:any;
  @Input() questionNumber:any;
  @Output() emitter = new EventEmitter<any>();
  answers:any[]= [];
  result:RespuestaHabilidades[]= [];

  constructor() { }

  ngOnInit(): void {
  }

  next(index:number){
    var res:RespuestaHabilidades={};
    res.id=this.question.id;
    res.inteligencia=this.question.inteligencia;
    
    if (index == 0) {
      res.respuesta = true;
      this.result.push(res);
    } else {
      res.respuesta = false;
      this.result.push(res);
    }

    if (this.questionNumber < 10) {
      this.emitter.emit(this.result);  
    }
  }

}
