import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Notification } from 'src/app/interfaces/notification';
import { Subject } from 'src/app/interfaces/subject';
import { Aviso, Usuario } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { GroupsService } from 'src/app/services/groups.service';
import Swal from 'sweetalert2';
import { Group } from '../../../interfaces/group';

@Component({
  selector: 'app-home-professor',
  templateUrl: './home-professor.component.html',
  styleUrls: ['./home-professor.component.scss']
})
export class HomeProfessorComponent implements OnInit {

  groups : Group[] = [];

  form!: FormGroup;
  usuario!:Usuario;
  notifications: Aviso[] = [];

  constructor(  private _authService: AuthService,
                private router: Router,
                private fb:FormBuilder,
                private _groupsService: GroupsService
  ) {}

  ngOnInit (): void {
    this.createNewForm();
    this.getUserBasicData();
  }

  getUserBasicData(){
    this._authService.subscribeUserBasicData().then( async ()=>{
      this.usuario = this._authService.getUserBasicData();
      console.log("USER",this.usuario);
      
       //*Cargar avisos
      this.usuario.avisos?.forEach( (aviso:Aviso) => {
        this.notifications.push(aviso);
      });

      // Carga grupos
      if ( this._groupsService.getGroups().length == 0 ) {
        await this._groupsService.createSubjects(this.usuario.matricula);
      }
      this.groups = this._groupsService.getGroups();
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
