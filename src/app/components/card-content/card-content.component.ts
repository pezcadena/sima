import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../../interfaces/content';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent implements OnInit {

  @Input() content:Content = {
    title:"Lección",
    type:"Prueba",
    preview:"assets/img/video.png",
    length:10
  }

  constructor() { }

  ngOnInit(): void {
  }

}
