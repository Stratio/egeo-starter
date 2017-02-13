import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { StRadioMenuOption } from "egeo";
@Component({
   selector: 'radio-menu-example',
   templateUrl: './radioMenuExample.template.html',
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class RadioMenuExample {
   options:Array<StRadioMenuOption>;
   selectedOption:StRadioMenuOption;

   constructor() {
      this.options = [
         {
            label: 'Service',
            value: 'service'
         },
         {
            label: 'Nodes',
            value: 'nodes'
         },
         {
            label: 'Casandra',
            value: 'cassandra'
         }
      ];
   }

   public changedOption(item: StRadioMenuOption): void {
      console.log("item", item);
   }
}