import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  num1:any;num2:any;num3:any;
  constructor() {
    this.num1=5;
    this.num2=7;

   }

  ngOnInit(): void {
    this.num3=this.num1+this.num2;

  }

}
