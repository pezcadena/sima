import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  subject:any;
  subjectName:string="";
  testName:string="";

  constructor( private activatedRoute: ActivatedRoute, private subjects: SubjectsService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.subject = this.subjects.getSubject(params.subject);
      this.subjectName = this.subject.name;
      var digits = this.separaDigitos(params.idc);
      this.testName  = this.subject.sections[0].parts[digits[1]-1];
    });

  }

  separaDigitos(numero:number):Array<number>{
    var num = numero;
    var digits = [];
    while (num > 0) {
        digits.push(num % 10);
        num = Math.trunc(num / 10);
    }
    digits.reverse();
    return digits;
  }

}
