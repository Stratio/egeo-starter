/*
 * Copyright (C) 2016 Stratio (http://stratio.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
