import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-student',
  templateUrl: './navbar-student.component.html',
  styleUrls: ['./navbar-student.component.scss']
})
export class NavbarStudentComponent implements OnInit {

  exp = 0;

  constructor() { }

  ngOnInit(): void {
  }

  plusExp(){
    if(this.exp < 100){
      this.exp+=10
    }
  }

}
