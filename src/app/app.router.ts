import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from '@app/errors';

const appRoutes:Routes = [
   {
      path: '**',
      component: Error404Component
   }
];

@NgModule({
   exports: [
      RouterModule
   ],
   imports: [
      RouterModule.forRoot(appRoutes, { enableTracing: true })
   ]
})

export class AppRouter { }
