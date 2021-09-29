import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-subject-admin',
  templateUrl: './subject-admin.component.html',
  styleUrls: ['./subject-admin.component.scss']
})
export class SubjectAdminComponent implements OnInit {

  form!: FormGroup;
  constructor(  private fb:FormBuilder, ){
      
    this.createNewForm();

  }

  ngOnInit(): void {
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

    console.log( this.form.value );
    
  }


}
