import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent { }
