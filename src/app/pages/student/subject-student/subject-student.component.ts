import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
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
  basicDataUser:Usuario | undefined;

  constructor( private activatedRoute: ActivatedRoute, private subjects: SubjectsService, private auth:AuthService ) { }

  ngOnInit(): void {
    this.getParams();
    this.getSesion();
    this.getBasicData();
  }

  getSesion(){
    this.auth.obtenerSesion().then(res=>{
      this.sesion = res;
    });
  }
  
  getBasicData(){
    this.auth.obtenerDatosBasicosUsuario().then( ( usuario:Usuario )=>{
      this.basicDataUser = usuario;
      console.log( this.basicDataUser );
      
    } );
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

    this.subject = event;
    this.partName = this.subject.sections[0].parts[this.subject.sections[0].select];
    
  }

  comprobarContenido(content:any){
    let idc = this.separaDigitos( content.idc );
    let idcUser = this.basicDataUser?.materias_activas[0].unidad * 100;
    idcUser += this.basicDataUser?.materias_activas[0].tema * 10;
    idcUser += this.basicDataUser?.materias_activas[0].material;

    if ( idc[idc.length - 1] == 4 || idcUser >= content.idc) {
      return true;
    }
    return false;
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
