import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { bearer }  from '../../assets/data/keys';


@Component({
  selector: 'app-list-docs',
  templateUrl: './list-docs.component.html',
  styleUrls: ['./list-docs.component.css']
})
export class ListDocsComponent implements OnInit {

  docs: Array<any>;
  postObj = {
    'accept': 'application/json',
  }
  searchCriteria = {
    "startTime": "2017-12-11 EST",
    "endTime": "2020-12-11 EST"
  }
  postURL:string = "v1/docstores/defaultchannel/documents/search"

  
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': this.postObj.accept,
      'Authorization': bearer
    })
  };

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  ngOnInit() {
  }

  getDocs = function(){
    return this.http.post(this.postURL, this.searchCriteria, this.httpOptions)
      .subscribe((list)=>{
        this.docs = list.response;
      }
    )
  }

}
