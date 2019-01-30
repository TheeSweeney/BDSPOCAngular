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
  getURL = 'assets/data/docs.json';


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getDocs = function(){
    this.http.get(this.getURL).subscribe(
      (file)=>{
            this.docs = file;
       })
  }

}
