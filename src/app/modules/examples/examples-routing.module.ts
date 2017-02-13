import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamplesComponent } from '.';

const examplesRoutes:Routes = [
   {
      path: '',
      component: ExamplesComponent
   }
];

@NgModule({
   exports: [
      RouterModule
   ],
   imports: [
      RouterModule.forChild(examplesRoutes)
   ]
})

export class ExamplesRoutingModule { }