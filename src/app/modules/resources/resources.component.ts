import { Component } from '@angular/core';

@Component({
   styleUrls: [ 'resources.styles.scss' ],
   templateUrl: 'resources.template.html'
})

export class ResourcesComponent {
   public title: string;

   constructor() {
      this.title = 'Resources';
   }
}