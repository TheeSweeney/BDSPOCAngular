import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-doc-upload',
  templateUrl: './doc-upload.component.html',
  styleUrls: ['./doc-upload.component.css']
})
export class DocUploadComponent implements OnInit {

  doc: any;

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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  postURL = 'assets/data/docs.json';

  ngOnInit() {
  }

  handleFileInput(uploadDoc){
    this.doc = uploadDoc
  }

  uploadFile = function(doc: any){
    return this.http.post(this.postURL, doc, this.httpOptions)
    .pipe(
      catchError(this.handleError('addDoc: ', doc))
    );

    setTimeout(function(){
      document.getElementById("uploadBtn").className = "btn btn-success"
    }, 3000)
  }
}
