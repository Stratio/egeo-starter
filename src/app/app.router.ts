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
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from '@app/errors/error-404/error-404.component';

const appRoutes: Routes = [
   {
      path: '',
      loadChildren: './modules/layout/layout.module#LayoutModule'
   },
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
