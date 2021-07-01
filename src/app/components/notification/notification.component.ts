import { Component, Input, OnInit } from '@angular/core';
import { Notification } from 'src/app/interfaces/notification';

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

  constructor() { }

  ngOnInit(): void {
  }

}
