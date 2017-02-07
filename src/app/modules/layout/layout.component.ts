import { Component, ChangeDetectorRef } from '@angular/core';

import { StHeaderModel } from 'egeo/egeo';

@Component({
   selector: 'layout',
   styleUrls: [ 'layout.styles.scss' ],
   templateUrl: 'layout.template.html'
})

export class LayoutComponent {

   public menu: Array<StHeaderModel> = [
      {
         icon: 'icon-book1',
         label: 'BROWSER',
         link: '/browser',
         subMenus: [],
         isActive: true
      }
   ];

   private contentOffset: number = 0;

   constructor(private _cd: ChangeDetectorRef) { }

   public onContentChangeOffset(offset: number): void {
      this.contentOffset = offset + 10;
      setTimeout(() => {
         this._cd.markForCheck();
      });
   }
}