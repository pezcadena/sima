import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  subject:any;
  content:any;
  idc:number=111;

  constructor(private activatedRoute: ActivatedRoute, private subjects: SubjectsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      console.log("params",params);
      this.subject = this.subjects.getSubject(params.subject);
      this.content = this.subjects.getContenidos(params.idc);
      console.log("content",this.content);
      
      this.idc = params.idc;
    })
  }

}