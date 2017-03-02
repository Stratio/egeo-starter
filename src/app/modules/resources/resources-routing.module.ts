import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResourcesComponent } from '.';

const resourcesRoutes:Routes = [
   {
      path: '',
      component: ResourcesComponent
   }
];

@NgModule({
   exports: [
      RouterModule
   ],
   imports: [
      RouterModule.forChild(resourcesRoutes)
   ]
})

export class ResourcesRoutingModule { }