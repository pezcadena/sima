import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-instructions',
  templateUrl: './card-instructions.component.html',
  styleUrls: ['./card-instructions.component.scss']
})
export class CardInstructionsComponent implements OnInit {

  @Output() startEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  start(){

    this.startEmitter.emit();
  }

}
