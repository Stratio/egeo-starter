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
import { Component } from '@angular/core';
import { StDropDownMenuItem } from '@stratio/egeo';

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
