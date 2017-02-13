import { Component } from '@angular/core';

@Component({
   styleUrls: [ 'examples.styles.scss' ],
   templateUrl: 'examples.template.html'
})

export class ExamplesComponent {
   public title: string;

   constructor() {
      this.title = 'Examples';
   }
}