import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/interfaces/notification';
import { Subject } from 'src/app/interfaces/subject';
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

  notifications : Notification[] = [
    {message:"Bienvenido a SIMA, te invitamos a explorar tus materias",active:true},
    {message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo voluptatum",active:false}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
