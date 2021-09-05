import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  select:string = "0";

  constructor() { }

  ngOnInit(): void {
    var res = localStorage.getItem("admin");
    if(res){
      this.select = res;
    }
  }

  selectB(select:string){
    this.select = select;
    localStorage.setItem("admin",select);
  }

}
