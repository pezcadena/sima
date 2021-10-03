import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AdminService } from '../../../Services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload-group',
  templateUrl: './upload-group.component.html',
  styleUrls: ['./upload-group.component.scss']
})
export class UploadGroupComponent implements OnInit {

  listaMaterias: any[] = [];
  form!: FormGroup;
  constructor(  private _adminService: AdminService,
                private fb:FormBuilder, ) {
    this.createNewForm();
  }

  ngOnInit(): void {
    this.cargarMaterias();
  }

  createNewForm(){
    this.form = this.fb.group({
      matricula_alumno: ["", [ Validators.required ]],
      id_materia: ["", [ Validators.required ] ],
    });
    // console.log( this.form );
  }

  cargarMaterias(){
    this._adminService.obtenerMateriasAdmin()
    .subscribe( (querySnapshot) => {
      
      let newObj:Object = {};
      querySnapshot.forEach((doc) => {
          Object.assign( newObj, doc.data() );
          Object.assign( newObj, { id_materia: doc.id } );
          this.listaMaterias.push( newObj );
          newObj = {};
          //LOG:
          console.log( newObj );
      });
    });
  }

  submitForm(){

    if( this.form.invalid ){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Verifica los datos proporcionados',
        showConfirmButton: true,
        confirmButtonColor: '#3085d6',
        timer: 3000
      });
      this.form.markAllAsTouched();
      return;
    }

    //LOG:
    console.log( this.form.value );
    const id_materia = this.form.controls["id_materia"].value; 
    const matricula_alumno = this.form.controls["matricula_alumno"].value; 
    this._adminService.registrarAlumnoAMateria( id_materia, matricula_alumno );
      
    
  }

}
