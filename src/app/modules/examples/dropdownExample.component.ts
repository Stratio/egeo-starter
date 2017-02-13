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