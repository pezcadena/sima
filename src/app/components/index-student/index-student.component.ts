import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-index-student',
  templateUrl: './index-student.component.html',
  styleUrls: ['./index-student.component.scss']
})
export class IndexStudentComponent implements OnInit {

  @Input() subject:any;
  @Input() content:boolean=false;
  @Input() user:Usuario | any;
  @Output() subjectOut = new EventEmitter<any>();
  selection:number=0;

  constructor(private rute:Router,private index:SubjectsService) { }

  async ngOnInit() {
    this.selection = this.subject.sections[0].select;
    this.selection = await this.index.getIndex().then();
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

  clase(i:number){

    if (this.user?.materias_activas[0].tema >= i+1) {
      if ( i == this.selection ) {
        return 'text-primary';
      }
      
      return 'text-dark';
    } else {
      return 'desabilitado';
    }

  }

}
