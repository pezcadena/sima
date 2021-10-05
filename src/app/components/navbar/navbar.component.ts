import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  displayName: string | null = "";
  photo: string | null = "";
  rolName: string | null = "";

  constructor(  private _authService: AuthService,
                private router: Router ) {
                  this.displayName  = localStorage.getItem('displayName');
                  this.photo  = localStorage.getItem('photo');
                }

  ngOnInit(): void {
    
  }

  cerrarSesion(){
    // localStorage.removeItem("token_tkn");
    this._authService.cerrarSesion();
    this.router.navigateByUrl("/login");
  }

}
