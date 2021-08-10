import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-index-student',
  templateUrl: './index-student.component.html',
  styleUrls: ['./index-student.component.scss']
})
export class IndexStudentComponent implements OnInit {

  @Input() subject:any;
  @Output() subjectOut = new EventEmitter<any>();;
  selection:number=0;

  constructor() { }

  ngOnInit(): void {
    this.select(0);
    console.log("init Selection",this.selection);
    
    this.selection = this.subject.sections[0].select;
  }

  select(index:number){
    this.subject.sections[0].select = index;
    this.selection = index;
    console.log("Out",this.subject);
    this.subjectOut.emit(this.subject);
  }

}
