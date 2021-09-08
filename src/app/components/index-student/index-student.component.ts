import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-index-student',
  templateUrl: './index-student.component.html',
  styleUrls: ['./index-student.component.scss']
})
export class IndexStudentComponent implements OnInit {

  @Input() subject:any;
  @Input() content:boolean=false;
  @Output() subjectOut = new EventEmitter<any>();
  selection:number=0;

  constructor(private rute:Router,private index:SubjectsService) { }

  ngOnInit(): void {
    this.selection = this.subject.sections[0].select;
    this.selection = this.index.getIndex();
    if(!(this.selection>=0)){
      this.selection = 1;
    }
    this.select(this.selection);
  }

  select(index:number){
    this.subject.sections[0].select = index;
    this.selection = index;
    console.log("Index Cambia",this.subject);
    this.subjectOut.emit(this.subject);
    this.index.saveIndex(index);

  }

}
