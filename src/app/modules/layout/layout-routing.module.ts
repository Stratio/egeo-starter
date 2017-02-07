import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '.';

const layoutRoutes:Routes = [
   {
      path: '',
      component: LayoutComponent
   }
];

@NgModule({
   exports: [
      RouterModule
   ],
   imports: [
      RouterModule.forChild(layoutRoutes)
   ]
})

export class LayoutRoutingModule { }