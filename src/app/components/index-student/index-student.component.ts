import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MateriasActivas, Usuario } from 'src/app/interfaces/usuario';
import { SubjectsService } from 'src/app/services/subjects.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-index-student',
  templateUrl: './index-student.component.html',
  styleUrls: ['./index-student.component.scss']
})
export class IndexStudentComponent implements OnInit {

  // Receptores
  @Input() subject:any; //realmente es infoMateriaLocal.
  @Input() idc:any;
  
  // Este modo define como se comporta el index dependiendo de donde se cargue.
  // Por defecto se comporta como si se cargara en la pantalla student-subject.
  @Input() modo:string = "subject";
  
  //Emisores
  @Output() subjectOut = new EventEmitter<any>();
  
  // Variables locales
  selection:number[]=[0,0]; //Define que elemento del index está seleccionado localmente.
  basicDataUser!:Usuario;
  materiaActiva!:MateriasActivas;

  tema = 0;

  constructor(private rute:Router,
              private _subjectsService:SubjectsService,
              private location:Location
  ) { }

  ngOnInit() {
    
    switch (this.modo) {
      case "content":
        this.initSelectionContent();
        break;
      default:
        setTimeout( ()=>{
          this.initSelectionSubject();
        },600 ); //Se usó un timeOut para llegar al deadline jeje
        break;
    }
  }

  /**
   * Funcion que inicializa el index dependiendo de la materia activa del usuario.
   */
  initSelectionSubject(){
    this.materiaActiva = this._subjectsService.getMateriaActiva();
    const unidad = this.materiaActiva.unidad;
    const tema = this.materiaActiva.tema;
    this.tema = this.materiaActiva.tema;
    this.select(unidad-1,tema-1);
  }

  initSelectionContent(){
    console.log("IniciaContenidoindex");
    console.log("idc",this.idc);
    const idcSeparado = this.separaDigitos(this.idc);
    this.tema = idcSeparado[1];
    this.selection[0] = idcSeparado[0] - 1;
    this.selection[1] = idcSeparado[1] - 1;
    
  }

  select(unidad:number,tema:number){
    this.selection[0] = unidad;
    this.selection[1] = tema;

    if (this.modo == "content") {
      this.subject.select = this.selection;
      this.location.back()
    } else {
      this.subject.select = this.selection;
      // console.log("Index Cambia",this.subject);
      this.subjectOut.emit(this.subject);
      // this._subjectsService.saveIndex(index);
    }

  }

  clase(i:number){

    try {
      
      if (this.tema >= i+1) {
        if ( i == this.selection[1] ) {
          return 'text-primary';
        }
        
        return 'text-dark';
      } else {
        return 'desabilitado';
      }
    } catch (error) {
      
    }
    return 'desabilitado';

  }

  separaDigitos(numero:number):Array<number>{
    var num = numero;
    var digits = [];
    while (num > 0) {
        digits.push(num % 10);
        num = Math.trunc(num / 10);
    }
    digits.reverse();
    if (digits.length > 3 ) {
      var tem = digits[1] * 10;
      tem += digits[2];
      digits[2] = digits[3];
      digits.pop();
      digits[1] = tem;
    }
    return digits;
  }


}
