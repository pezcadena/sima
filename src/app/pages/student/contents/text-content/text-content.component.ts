import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-text-content',
  templateUrl: './text-content.component.html',
  styleUrls: ['./text-content.component.scss']
})
export class TextContentComponent implements OnInit {

  sepia:boolean=false;
  subject:any;
  content:any;

  constructor(private activatedRoute: ActivatedRoute, private subjects: SubjectsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      console.log("params",params);
      this.subject = this.subjects.getSubject(params.subject);
      this.content = this.subjects.getContenidos(params.idc);
    })
  }

  
}
