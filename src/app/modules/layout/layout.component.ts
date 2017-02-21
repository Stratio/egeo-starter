import { Component, ChangeDetectorRef } from '@angular/core';

import { StHeaderModel, StFooterLink } from 'egeo';

@Component({
   selector: 'layout',
   styleUrls: [ 'layout.styles.scss' ],
   templateUrl: 'layout.template.html'
})

export class LayoutComponent {

   public contentOffset: number;
   public menu: Array<StHeaderModel>;
   public rightsText: string;
   public links: Array<StFooterLink>;

   constructor(private _cd: ChangeDetectorRef) {
      this.contentOffset = 0;
      this.rightsText = '© Stratio Big Data Inc. All Rights Reserved';
      this.menu = [
         {
            icon: 'icon-link',
            label: 'RESOURCES',
            link: '/resources',
            subMenus: [],
            isActive: true
         },
         {
            icon: 'icon-rocket',
            label: 'EXAMPLES',
            link: '/examples',
            subMenus: [],
            isActive: true
         }
      ];
      this.links = [
         {
            title: 'Egeo repository',
            url: 'https://github.com/Stratio/egeo'
         },
         {
            title: 'Egeo doc',
            url: 'http://stratiodocs.s3-website-us-east-1.amazonaws.com/egeo/1.0.0-RC1'
         }
      ];
   }

   public onContentChangeOffset(offset: number): void {
      this.contentOffset = offset + 20;
      setTimeout(() => {
         this._cd.markForCheck();
      });
   }
}
