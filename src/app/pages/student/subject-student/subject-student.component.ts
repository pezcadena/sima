import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
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
  sesion:any;

  constructor( private activatedRoute: ActivatedRoute, private subjects: SubjectsService, private auth:AuthService ) { }

  ngOnInit(): void {
    this.getParams();
    this.getSesion();
  }

  getSesion(){
    this.auth.obtenerSesion().then(res=>{
      this.sesion = res;
    });
  }

  getParams(){
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
