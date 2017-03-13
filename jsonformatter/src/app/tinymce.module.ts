/*import NgModule from '@angular/core';
import TinymceModule from 'angular2-tinymce';

@NgModule({
	imports: [  ]
})
export class TinyMceModule { }*/

import { Component } from '@angular/core';

@Component({
  selector: 'my-app-1',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent1  { name = 'Angular'; }


