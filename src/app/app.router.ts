import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuModule, MENU_ROUTES } from './menu';
import { Error404Component } from '@app/errors';

const appRoutes:Routes = [
   ...MENU_ROUTES,
   { path: 'messages', loadChildren: './messages/index#MessagesModule' },
   { path: 'settings', loadChildren: './settings/index#SettingsModule' },
   {
      path: '**',
      component: Error404Component
   }
];

@NgModule({
   exports: [
      MenuModule,
      RouterModule
   ],
   imports: [
      MenuModule,
      RouterModule.forRoot(appRoutes, { enableTracing: true })
   ]
})

export class AppRouter { }
