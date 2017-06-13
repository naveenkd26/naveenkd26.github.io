import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as CodeMirror from 'codemirror';

import { AppComponent }  from './app.component';
//import { TinymceModule } from 'angular2-tinymce';
//import { TinyMceModule } from './tinymce.module';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
