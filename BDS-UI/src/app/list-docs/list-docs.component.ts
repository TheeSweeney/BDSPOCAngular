import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-docs',
  templateUrl: './list-docs.component.html',
  styleUrls: ['./list-docs.component.css']
})
export class ListDocsComponent implements OnInit {

  docs: Array<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDocs();
  }

  getDocs = function(){
    this.http.get('http://localhost:4200/assets/data/docs.json')
      .subscribe(
        data => console.log(data)
      )
  }

}
