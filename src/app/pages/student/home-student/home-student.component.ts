import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { Notification } from 'src/app/interfaces/notification';
import { Subject } from '../../../interfaces/subject';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.scss']
})
export class HomeStudentComponent implements OnInit {
  
  constructor(  private _authService: AuthService,
                private router: Router,
                private fb:FormBuilder ) { 
                  this.sesion = this._authService.sesionUsuario;
                  this.createNewForm();
                }
  
  form!: FormGroup;
  sesion: any = null;
  


  subjects : Subject[] = [
    {id:2,name:"Metodologia de la programación", professor:"Judit Villalba",contentComplete:14,contentTotal:56}
  ]

  notifications : Notification[] = [
    {message:"Bienvenido a SIMA, te invitamos a explorar tus materias",active:true}
  ]


  ngOnInit(): void {
    //LOG:
  console.log( this.sesion );
  }

  accion(){
    this._authService.borrarDatosTemporales();
  }

  createNewForm(){
    this.form = this.fb.group({
      password1: ["", [ Validators.required, Validators.minLength(8) ] ],
      password2: ["", [ Validators.required, Validators.minLength(8) ] ],
    });
  }

  submitForm(){
    //LOG:
    console.log( this.form );
    if( this.form.controls["password1"].value != this.form.controls["password2"].value ){
      this.form.setErrors({invalid:true});
    }

    if( this.form.invalid ){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Las contraseñas deben coincidir y deben tener minimo 8 caracteres.',
        showConfirmButton: true,
        confirmButtonColor: '#3085d6',
        timer: 5000
      });
      this.form.markAllAsTouched();
      
      return;
    }else{

    }
  }

}
