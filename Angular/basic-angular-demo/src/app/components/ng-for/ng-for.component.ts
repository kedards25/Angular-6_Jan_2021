import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  fruits:string[]=["Mango","Orange","Guava","Grapes"];
  constructor() { }

  ngOnInit(): void {
  }

}
