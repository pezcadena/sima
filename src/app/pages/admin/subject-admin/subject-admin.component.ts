import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AdminService } from '../../../Services/admin.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-subject-admin',
  templateUrl: './subject-admin.component.html',
  styleUrls: ['./subject-admin.component.scss']
})
export class SubjectAdminComponent implements OnInit {

  form!: FormGroup;
  materias: any[] = [];
  constructor(  private fb:FormBuilder,
                private _adminService: AdminService ){
      
    this.createNewForm();

  }

  ngOnInit(): void {
    this.obtenerMaterias();
  }


  createNewForm(){
    this.form = this.fb.group({
      nrc: ["", [ Validators.required ]],
      nombre_profesor: ["", [ Validators.required ]],
      id_contenido: ["", [ Validators.required ] ],
      periodo: ["", [ Validators.required ] ],
      anio: ["", [ Validators.required ] ],
    });
    // console.log( this.form );
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

    this._adminService.crearMateriaAdmin( this.form.value )
      .then( resp =>{
        this.ngOnInit();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Materia creada correctamente.',
          showConfirmButton: true,
          confirmButtonColor: '#3085d6',
          timer: 3000
        });
      }).catch( error => {
        console.log( error ); 
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Problemas al crear la materia, intenta nuevamente.',
          showConfirmButton: true,
          confirmButtonColor: '#3085d6',
          timer: 3000
        });
      });
    
  }

  obtenerMaterias(){
    this._adminService.obtenerMateriasAdmin()
    .subscribe( (querySnapshot) => {
      
      let newObj:Object = {};
      querySnapshot.forEach((doc) => {
          Object.assign( newObj, doc.data() );
          Object.assign( newObj, { id: doc.id } );
          this.materias.push( newObj );
          newObj = {};
      });
    });
  }

  eliminarMateria( idMateria:string ){
    console.log( idMateria );
    this._adminService.eliminarMateriaAdmin( idMateria )
    .then(() => {
      this.ngOnInit();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'La materia se elimino correctamente.',
        showConfirmButton: true,
        confirmButtonColor: '#3085d6',
        timer: 3000
      });
    }).catch((error) => {
        console.error("Error removing document: ", error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Problemas al aliminar la materia, intenta nuevamente.',
          showConfirmButton: true,
          confirmButtonColor: '#3085d6',
          timer: 3000
        });
    });
  }

}
