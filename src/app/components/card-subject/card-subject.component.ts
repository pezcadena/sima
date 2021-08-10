import { Component, Input, OnInit } from '@angular/core';
import { Subject } from '../../interfaces/subject';

@Component({
  selector: 'app-card-subject',
  templateUrl: './card-subject.component.html',
  styleUrls: ['./card-subject.component.scss']
})
export class CardSubjectComponent implements OnInit {

  @Input() subject: Subject = {
    id:0,
    name: "Materia",
    professor: "Profesor",
    contentComplete:100,
    contentTotal:100
  };

  progress:number = 100;

  constructor() { }

  ngOnInit(): void {
    this.progress =  (this.subject.contentComplete * 100) / this.subject.contentTotal;
  }

}
