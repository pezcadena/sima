import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-results',
  templateUrl: './card-results.component.html',
  styleUrls: ['./card-results.component.scss']
})
export class CardResultsComponent implements OnInit {

  @Input() results:any[]=[];
  @Input() inteligencias:boolean=false;
  corrects:number=0;
  total:number=0;


  constructor(private location:Location) { }

  ngOnInit(): void {
    this.total = this.results.length;
    this.results.forEach(element => {
      if (element) {
        this.corrects++;
      }
    });
  }

  atras(){
    this.location.back();
  }

}
