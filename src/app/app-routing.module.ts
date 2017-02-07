import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from "@starter/errors";

const appRoutes:Routes = [
   {
      path: '',
      loadChildren: './modules/layout/layout.module#LayoutModule'
   },
   {
      path: 'example',
      loadChildren: './modules/example/example.module#ExampleModule'
   },
   {
      path: '**',
      component: Error404Component
   }
];

@NgModule({
   exports: [ RouterModule ],
   imports: [ RouterModule.forRoot(appRoutes) ]
})

export class AppRoutingModule { }
