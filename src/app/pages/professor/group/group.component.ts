import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  constructor(
    private _groupService: GroupsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getParams();
  }

  getParams(){
    this.activatedRoute.params.subscribe(params=>{
      
    });
  }

}
