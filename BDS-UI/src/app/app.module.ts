import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DocUploadComponent } from './doc-upload/doc-upload.component';
import { ListDocsComponent } from './list-docs/list-docs.component';

@NgModule({
  declarations: [
    AppComponent,
    DocUploadComponent,
    ListDocsComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
