/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { StRadioMenuOption } from '@stratio/egeo';
@Component({
   selector: 'radio-menu-example',
   templateUrl: './radioMenuExample.template.html',
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class RadioMenuExampleComponent {
   options: Array<StRadioMenuOption>;
   selectedOption: StRadioMenuOption;

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
      console.log('item', item);
   }
}
