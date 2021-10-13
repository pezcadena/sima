import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { SubjectsService } from 'src/app/services/subjects.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-text-content',
  templateUrl: './text-content.component.html',
  styleUrls: ['./text-content.component.scss']
})
export class TextContentComponent implements OnInit {

  sepia:boolean=false;
  subject:any;
  content:any;
  idc:number=111;
  basicDataUser:Usuario | undefined;

  constructor(private activatedRoute: ActivatedRoute, private subjects: SubjectsService, private auth:AuthService,public location:Location) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      console.log("params",params);
      this.subject = this.subjects.getInfoMateriaLocal(params.subject);
      this.content = this.subjects.getContenidoLocal(params.idc);
      console.log("content",this.content);
      
      this.idc = params.idc;
      this.getBasicData();
    })
  }

  getBasicData(){
    this.auth.obtenerDatosBasicosUsuario().then( ( usuario:Usuario )=>{
      this.basicDataUser = usuario;
      console.log( this.basicDataUser );
    } );
  }

  
}
