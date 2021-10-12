import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/app/interfaces/subject';
import { MateriasActivas, Usuario } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-subject-student',
  templateUrl: './subject-student.component.html',
  styleUrls: ['./subject-student.component.scss']
})
export class SubjectStudentComponent implements OnInit {

  infoMateriaLocal:any;
  progress:number=0;
  partName:string="Lección";
  sesion:any;
  basicDataUser:Usuario | any;
  subject!: Subject;
  idMateria!:string;
  materiaActiva! : MateriasActivas;
  arrayofContents : any[] = [];

  constructor( private activatedRoute: ActivatedRoute, 
              private _subjectsService: SubjectsService, 
              private _authService:AuthService, 
              private router:Router 
              ) { }

  ngOnInit(): void {
    this.getParams();
    this.getSesion();
  }

  // ngOnChanges(){
  //   this.setArrayofContents();
  // }
  
  getParams(){
    this.activatedRoute.params.subscribe(params=>{
      this.idMateria = params.subject;
      console.log("InfoMateriaLocal",this.idMateria);
      this.infoMateriaLocal = this._subjectsService.getInfoMateriaLocal(params.subject);
      this.partName = this.infoMateriaLocal.sections[0].parts[this.infoMateriaLocal.sections[0].select];
      this.getBasicData();
    });
  }

  getSesion(){
    this._authService.obtenerSesion().then(res=>{
      this.sesion = res;
    });
  }
  
  getBasicData(){

    this._authService.subscribeUserBasicData().then( async ()=>{
      this.basicDataUser = this._authService.getUserBasicData();
      this.setMateriaActiva();
      this.setArrayofContents();
      console.log( "basicaDataUser",this.basicDataUser );

      //Obtine datos de la materia actual
      if ( this._subjectsService.getSubjects().length == 0 ) {
        await this._subjectsService.createSubjects(this.basicDataUser.materias_activas as MateriasActivas[]);
      }
      this.subject = this._subjectsService.getSubject(this.idMateria);
      console.log("Subject actual",this.subject);

      //Rellena variables locales
      this.progress =  (this.subject.contentComplete * 100) / this.infoMateriaLocal.contentTotal;
      
      //Encuentra el index de la materia activa
      const indexMateriaActiva = this.basicDataUser.materias_activas.findIndex((materia:MateriasActivas) => materia.id_materia == this.idMateria);
      
      //Comprueba si es la primera vez entrando a la materia.
      if ( this.getIdcUser() == 0 ) {
        console.log("index",indexMateriaActiva);
        
        this.basicDataUser.materias_activas[indexMateriaActiva].unidad = 1;
        this.basicDataUser.materias_activas[indexMateriaActiva].tema = 1;
        this.basicDataUser.materias_activas[indexMateriaActiva].material = 1;
        this._authService.guardarDatosBasicosUsuario(this.basicDataUser);
        this.router.navigate(["/testInteligencias"]);
      } else {
        // De otra manera comprueba el tipo de material a mostrar.
        let temporal = this.basicDataUser.test_habilidades.slice();
        this.basicDataUser.materias_activas[indexMateriaActiva].material = temporal.pop().contenido;
        this._authService.guardarDatosBasicosUsuario(this.basicDataUser);
      }
    } );


  }

  setArrayofContents(){
    this.arrayofContents = this.infoMateriaLocal?.sections[this.materiaActiva.unidad-1].partsContent[this.infoMateriaLocal?.sections[this.materiaActiva.unidad-1].select]
  }


  indexOut(event:any){

    this.infoMateriaLocal = event;
    this.setArrayofContents();

    try {
      this.partName = this.infoMateriaLocal.sections[this.materiaActiva.unidad-1].parts[this.infoMateriaLocal.sections[this.materiaActiva.unidad-1].select];
    } catch (error) {
      
    }
    
  }

  comprobarContenido(content:any){
    let idc = this.separaDigitos( content.idc );
    if (this.basicDataUser) {
      let idcUser = this.getIdcUser();
      if ( idc[idc.length - 1] == 4 || (idcUser >= content.idc && idc[idc.length - 1] == this.materiaActiva.material) ) {
        return true;
      }
      return false;
    } else {
      return false;
    }
  }

  getIdcUser(){
    let idcUser = this.materiaActiva.unidad * 100;
    idcUser += this.materiaActiva.tema * 10;
    idcUser += this.materiaActiva.material * 1;
    return idcUser;
  }

  setMateriaActiva(){
    this.materiaActiva = this.basicDataUser.materias_activas.find((materia:MateriasActivas) => materia.id_materia == this.idMateria);
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
