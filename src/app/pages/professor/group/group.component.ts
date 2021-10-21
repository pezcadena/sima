import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/interfaces/group';
import { Usuario } from 'src/app/interfaces/usuario';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  group!:Group;
  studentsList! : Usuario[];
  progress:number=0;

  constructor(
    private _groupService: GroupsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getParams();
  }

  getParams(){
    this.activatedRoute.params.subscribe(params=>{
      console.log(params.id);
      this.getBasicData( params.id );
    });
  }

  async getBasicData( id:string ){
    if( !this._groupService.getGroup() ){
      await this._groupService.createGroup( id );
    }
    this.group = this._groupService.getGroup();
    this.studentsList = this._groupService.getStudentsList();
    console.log("Grupo",this.group,this.studentsList);
    this.progress =  (this.group.contentComplete * 100) / this.group.contentTotal;
  }

}
