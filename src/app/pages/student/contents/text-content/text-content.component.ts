import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-content',
  templateUrl: './text-content.component.html',
  styleUrls: ['./text-content.component.scss']
})
export class TextContentComponent implements OnInit {

  sepia:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  
}
