import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doc-upload',
  templateUrl: './doc-upload.component.html',
  styleUrls: ['./doc-upload.component.css']
})
export class DocUploadComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  handleFileInput(files){
     this.http.get('assets/data/docs.json').subscribe(
      (file)=>{
            console.log('file: ',file);
       })
  }

  uploadFile = function(){
    setTimeout(function(){
      document.getElementById("uploadBtn").className = "btn btn-success"
    }, 3000)
  }
}
