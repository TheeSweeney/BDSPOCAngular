import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { apiKey, bearer }  from '../../assets/data/keys';

@Component({
  selector: 'app-doc-upload',
  templateUrl: './doc-upload.component.html',
  styleUrls: ['./doc-upload.component.css']
})
export class DocUploadComponent implements OnInit {

  doc: any;
  docName: string;
  fileToUpload: File;
  postURL:string = '/v1/docstores/defaultchannel/documents/files/' + this.docName + '?document_type=json';
  postObj = {
    'accept': 'application/json',
    'api_key': apiKey
  }
  
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
      'Accept': this.postObj.accept,
      'Authorization': bearer
    })
  };

  httpBody = {
    'grant_type': 'urn:ibm:params:oauth:grant-type:apikey',
    'apikey': apiKey
  }

  ngOnInit() {
  }
 
  handleFileInput(files:FileList){
    this.fileToUpload = files.item(0); 
    this.docName = "test"
  }

  uploadFile = function(){
    let input = new FormData();

    input.append('file',this.fileToUpload);

    return this.http.post(this.postURL, input, this.httpOptions)
      .subscribe((val) =>{
        if(val) {
         console.log(val);
        } else {
         catchError(this.handleError('addDoc: ', this.doc))
        }
      }
    );
     // .pipe(
      //catchError(this.handleError('addDoc: ', this.doc))
    //);
    //fake color change to simulate success
    // setTimeout(function(){
    //   document.getElementById("uploadBtn").className = "btn btn-success"
    // }, 3000)
  }
}
