import { Component, Input, OnInit } from '@angular/core';
import { Aviso, Usuario } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() notification:Aviso = {
    mensaje:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo voluptatum",
    visto:false,
  }
  @Input() index:number = 0;

  constructor( private _authService:AuthService ) { }

  ngOnInit(): void {
  }

  /**
  * Modifica el parametro visto de la notificación al darle click.
  */
  verNoti(): void{
    if (!this.notification.visto) {
      
      let usuario : Usuario = this._authService.getUserBasicData();
      usuario.avisos![this.index].visto = true;
      this.notification.visto = true;
      this._authService.guardarDatosBasicosUsuario(usuario);
      
    }
  }

}
