import {Component, Input} from '@angular/core';

@Component({
   selector: 'info-card-example',
   templateUrl: 'infoCardExample.template.html'
})

export class InfoCardExampleComponent {
   @Input() photo: string;
   @Input() title: string;
   @Input() description: string;

   constructor() { }
}