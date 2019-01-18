import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocUploadComponent } from './doc-upload/doc-upload.component';
import { ListDocsComponent } from './list-docs/list-docs.component';

@NgModule({
  declarations: [
    AppComponent,
    DocUploadComponent,
    ListDocsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
