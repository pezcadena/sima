import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-subject-student',
  templateUrl: './subject-student.component.html',
  styleUrls: ['./subject-student.component.scss']
})
export class SubjectStudentComponent implements OnInit {

  subject:any;
  progress:number=0;
  partName:string="Lección";

  constructor( private activatedRoute: ActivatedRoute, private subjects: SubjectsService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      console.log("Subject",params.subject);
      this.subject = this.subjects.getSubject(params.subject);
      this.progress =  (this.subject.contentComplete * 100) / this.subject.contentTotal;
      this.partName = this.subject.sections[0].parts[this.subject.sections[0].select];
    });
  }

  indexOut(event:any){
    console.log("Index out",event);
    this.subject = event;
    console.log("sub",this.subject.sections[0]);
    
    this.partName = this.subject.sections[0].parts[this.subject.sections[0].select];
    console.log("PartNAme",this.partName);
    
  }

}
