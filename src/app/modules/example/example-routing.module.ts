import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExampleComponent } from '.';

const exampleRoutes:Routes = [
   {
      path: '',
      component: ExampleComponent
   }
];

@NgModule({
   exports: [
      RouterModule
   ],
   imports: [
      RouterModule.forChild(exampleRoutes)
   ]
})

export class ExampleRoutingModule { }