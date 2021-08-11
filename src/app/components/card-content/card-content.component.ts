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

  type:string="";

  constructor() { }

  ngOnInit(): void {
    switch (this.content.type) {
      case "Texto":
        this.type="text";
        break;
      case "Video":
        this.type="video";
        break;
      case "Imagen":
        this.type="image";
        break;
      default:
        this.type="nothing";
        break;
    }
  }

}
