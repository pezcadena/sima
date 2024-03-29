import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../../interfaces/group';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent implements OnInit {

  @Input() group!: Group;

  progress:number = 100;

  constructor() { }

  ngOnInit(): void {
    this.progress =  (this.group.contentComplete * 100) / this.group.contentTotal;
  }

}
