import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from '@starter/shared';

const appRoutes:Routes = [
   {
      path: '',
      pathMatch: 'full',
      redirectTo: '/example'
   },
   {
      path: 'example',
      loadChildren: './modules/example/example.module#ExampleModule'
   },
   {
      path: '**',
      component: PageNotFoundComponent
   }
];

@NgModule({
   exports: [ RouterModule ],
   imports: [ RouterModule.forRoot(appRoutes) ]
})

export class AppRoutingModule { }
