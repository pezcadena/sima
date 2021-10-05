import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  select:string = "0";

  constructor(private router: Router) { }

  ngOnInit(): void {
    var res = localStorage.getItem("admin");
    if(res){
      this.select = res;
    }
    this.logAdmin();
  }

  selectB(select:string){
    this.select = select;
    localStorage.setItem("admin",select);
  }

  async logAdmin(){
    const value  = await Swal.fire({
      position: 'center',
      title: 'Ingresa contraseña:',
      input: 'password',
      inputLabel: 'Contraseña',
      inputPlaceholder: 'Ingresa contraseña',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showCancelButton : true
    });
    
    if (value.isDismissed) {
      this.router.navigate(['/']);
    } else {
      if (value.value != "123") {
        await Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Verifica los datos proporcionados',
          showConfirmButton: false,
          timer: 3000
        });
        this.logAdmin();
      }
    }
  }

}
