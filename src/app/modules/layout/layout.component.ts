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
import { Component, ChangeDetectorRef } from '@angular/core';
import { StHeaderModel, StFooterLink } from '@stratio/egeo';

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
            url: 'https://stratio.github.io/egeo-web/2.0.1/#/main'
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
