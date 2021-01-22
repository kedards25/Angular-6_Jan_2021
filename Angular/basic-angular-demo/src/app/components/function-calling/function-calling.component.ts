import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function-calling',
  templateUrl: './function-calling.component.html',
  styleUrls: ['./function-calling.component.css']
})
export class FunctionCallingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(val:string):void{
    alert("Welcome to our app "+val);
  }
}
