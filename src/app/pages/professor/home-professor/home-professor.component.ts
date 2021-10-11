import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Notification } from 'src/app/interfaces/notification';
import { Subject } from 'src/app/interfaces/subject';
import { Aviso, Usuario } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Group } from '../../../interfaces/group';

@Component({
  selector: 'app-home-professor',
  templateUrl: './home-professor.component.html',
  styleUrls: ['./home-professor.component.scss']
})
export class HomeProfessorComponent implements OnInit {

  groups : Group[] = [
    {name:"Matematicas-2021-1",students:24,contentComplete:43,contentTotal:50},
    {name:"Matodologia de la programación-2021-2", students:32,contentComplete:14,contentTotal:56}
  ]

  form!: FormGroup;
  usuario:Usuario | any;
  notifications: Aviso[] = [];

  constructor(  private _authService: AuthService,
                private router: Router,
                private fb:FormBuilder 
  ) {}

  ngOnInit (): void {
    this.createNewForm();
    this.getUserBasicData();
    // this._authService.obtenerDatosBasicosUsuario().then(  ( res:Usuario ) => {
    //   //*Cargar avisos
    //   res.avisos?.forEach( (obj:Aviso) => {
    //     let nuevoObj:Notification = { message: obj.mensaje, active: obj.visto }
    //     this.notifications.push(nuevoObj);
    //   })
    // })

  }

  getUserBasicData(){
    this._authService.subscribeUserBasicData().then( ()=>{
      this.usuario = this._authService.getUserBasicData();
       //*Cargar avisos
      this.usuario.avisos?.forEach( (aviso:Aviso) => {
        this.notifications.push(aviso);
      })
    } );
  }

  // Funciones de cambio de contraseña ( posiblemente se cambien a un servicio )

  createNewForm(){
    this.form = this.fb.group({
      password1: ["", [ Validators.required, Validators.minLength(8) ] ],
      password2: ["", [ Validators.required, Validators.minLength(8) ] ],
    });
  }

  submitForm(){
    
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
      
    }else{
    //LOG:
    console.log( this.form );
    this._authService.setNuevoPassword( this.form.controls["password1"].value )
    //!Enviar nueva contraseña
    }
  }

}
