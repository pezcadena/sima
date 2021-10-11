import { Component, Input, OnInit } from '@angular/core';
import { Notification } from 'src/app/interfaces/notification';
import { Usuario } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() notification:Notification = {
    message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo voluptatum",
    active:true,
  }
  @Input() index:number = 0;

  constructor( private _authService:AuthService ) { }

  ngOnInit(): void {
  }

  verNoti(){
    if (!this.notification.active) {
      this._authService.obtenerDatosBasicosUsuario().then(  ( res:Usuario ) => {
        res.avisos![this.index].visto = true;
        this.notification.active = true;
        this._authService.guardarDatosBasicosUsuario(res);
      });
    }
  }

}
