import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { apiKey }  from '../../assets/data/api_key';

@Component({
  selector: 'app-doc-upload',
  templateUrl: './doc-upload.component.html',
  styleUrls: ['./doc-upload.component.css']
})
export class DocUploadComponent implements OnInit {

  doc: any;
  docName: string;

  postIAMTokenObj = {
    'contentType': 'application/x-www-form-urlencoded',
    'grantType': 'urn:ibm:params:oauth:grant-type:apikey',
    'accept': 'application/json',
    'api_key': apiKey
  }

  postURL = 'https://pbsa-prod.us-south.containers.mybluemix.net/1eda687e-efe8-4ba1-a4e7-a8bfc295e139/docstore/v1/docstores/defaultchannel/documents/files/' + this.docName + '?document_type=json';

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
      'Accept':  this.postIAMTokenObj.accept,
    })
  };

  httpBody = {
    'grant_type': 'urn:ibm:params:oauth:grant-type:apikey',
    'apikey': apiKey
  }


  ngOnInit() {
    console.log(this.httpOptions)
    console.log(this.httpBody)
    console.log(this.postURL)
  }

  handleFileInput(uploadDoc){
    this.doc = uploadDoc
    this.docName = uploadDoc[0].name
    console.log(this.docName)
  }

  uploadFile = function(){
    return this.http.post(this.postURL, this.doc, this.httpOptions)
    .pipe(
      catchError(this.handleError('addDoc: ', this.doc))
    );
    //fake color change to simulate success
    // setTimeout(function(){
    //   document.getElementById("uploadBtn").className = "btn btn-success"
    // }, 3000)
  }
}
