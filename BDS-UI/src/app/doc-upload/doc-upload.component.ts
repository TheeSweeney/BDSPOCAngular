import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-doc-upload',
  templateUrl: './doc-upload.component.html',
  styleUrls: ['./doc-upload.component.css']
})
export class DocUploadComponent implements OnInit {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  postURL = 'assets/data/docs.json';

  ngOnInit() {
  }

  handleFileInput(files){
     
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
