import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Subject } from '../../../interfaces/subject';
import { Aviso, Usuario } from '../../../interfaces/usuario';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.scss']
})
export class HomeStudentComponent implements OnInit {
  
  form!: FormGroup;
  usuario:Usuario | any;
  notifications: Aviso[] = [];
  
  subjects : Subject[] = [
    {id:2,name:"Metodologia de la programación", professor:"Judit Villalba",contentComplete:14,contentTotal:56}
  ]
  
  constructor(  private _authService: AuthService,
                private router: Router,
                private fb:FormBuilder 
              ) {}

  ngOnInit (): void {
    this.createNewForm();
    this.getUserBasicData();
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

  //!borrar
  accion(){
    // this._authService.nuevoRegistro( "adrianerx@hotmail.it", "12345678" );
    // this._authService.borrarDatosTemporales();
    this.router.navigate(["/testInteligencias"]);
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
