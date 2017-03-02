import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '.';

const layoutRoutes:Routes = [
   {
      path: '',
      component: LayoutComponent,
      children: [
         {
            path: '',
            redirectTo: 'resources'
         },
         {
            path: 'resources',
            loadChildren: '../../modules/resources/resources.module#ResourcesModule'
         },
         {
            path: 'examples',
            loadChildren: '../../modules/examples/examples.module#ExamplesModule'
         }
      ]
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