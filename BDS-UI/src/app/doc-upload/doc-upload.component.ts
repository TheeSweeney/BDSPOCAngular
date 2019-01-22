import { Component, OnInit } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload';


@Component({
  selector: 'app-doc-upload',
  templateUrl: './doc-upload.component.html',
  styleUrls: ['./doc-upload.component.css']
})
export class DocUploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  uploadFile = function(){
    setTimeout(function(){
      document.getElementById("uploadBtn").className = "btn btn-success"
    }, 3000)
  }
}
