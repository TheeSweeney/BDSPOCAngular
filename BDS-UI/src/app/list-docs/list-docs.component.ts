import { Component, OnInit } from '@angular/core';
import { docs } from "./../data/docs";

@Component({
  selector: 'app-list-docs',
  templateUrl: './list-docs.component.html',
  styleUrls: ['./list-docs.component.css']
})
export class ListDocsComponent implements OnInit {

  docs: Array<any> = docs;

  constructor() { }

  ngOnInit() {
  }

}
