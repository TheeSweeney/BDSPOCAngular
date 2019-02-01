import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { apiKey }  from '../../assets/data/keys';


@Component({
  selector: 'app-token-refresh',
  templateUrl: './token-refresh.component.html',
  styleUrls: ['./token-refresh.component.css']
})
export class TokenRefreshComponent implements OnInit {
  
  apiKey = apiKey;
  postUrl: string = "token"
  postObj = {
    grant_type: 'urn:ibm:params:oauth:grant-type:apikey',
    apikey: apiKey
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  };

  constructor() { }
  //TODO make handleError a service
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

  getIAM = function(){
    return this.http.post(this.postURL, this.postObj, this.httpOptions)
      .subscribe((res) => {
        console.log(res)
      })
  }

  getExchange = function(){
    return this.http.post(this.postURL, this.postObj, this.httpOptions)
      .subscribe((res) => {
        console.log(res)
      })
  }

  refreshToken = function(){
    this.getIAM()
    this.getExchange()
  }

}
