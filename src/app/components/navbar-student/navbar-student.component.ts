import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar-student',
  templateUrl: './navbar-student.component.html',
  styleUrls: ['./navbar-student.component.scss']
})
export class NavbarStudentComponent implements OnInit {

  exp = 0;
  displayName: string | null = "";
  photo: string | null = "";
  constructor(  private _authService: AuthService,
                private router: Router ) {
                  this.displayName  = localStorage.getItem('displayName');
                  this.photo  = localStorage.getItem('photo');
                }

  ngOnInit(): void {
    
  }

  plusExp(){
    if(this.exp < 100){
      this.exp+=10
    }
  }

  cerrarSesion(){
    // localStorage.removeItem("token_tkn");
    this._authService.cerrarSesion();
    this.router.navigateByUrl("/login");
  }

}
