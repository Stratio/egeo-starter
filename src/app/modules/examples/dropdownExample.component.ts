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

import { Component } from '@angular/core';
import { StDropDownMenuItem } from "egeo";

@Component({
   selector: 'dropdown-example',
   templateUrl: './dropdownExample.template.html'
})

export class DropdownExampleComponent {
   public itemsDropdown: Array<StDropDownMenuItem>;
   public itemsWithIcon: Array<StDropDownMenuItem>;

   constructor() {
      this.itemsDropdown = [
         {
            label: 'Item1',
            value: 1,
            selected: true
         }, {
            label: 'Item2',
            value: 2
         }, {
            label: 'Item3',
            value: 3
         }
      ];
      this.itemsWithIcon = [
         {
            label: 'Edit',
            icon: 'icon-edit2',
            value: 'edit'
         },
         {
            label: 'Duplicate',
            icon: 'icon-copy',
            value: 'duplicate'
         },
         {
            label: 'Add',
            icon: 'icon-copy',
            value: 'add'
         },
         {
            label: 'Delete',
            icon: 'icon-copy',
            value: 'delete'
         }
      ];
   }

   public onClickDropdown(item: StDropDownMenuItem): void {
      console.log(item);
   }

   public onItemChange(item: StDropDownMenuItem): void {
      console.log(item.value);
   }
}
