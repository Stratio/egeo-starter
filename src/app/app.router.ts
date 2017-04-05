import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuModule, MENU_ROUTES } from './menu';

@NgModule({
   exports: [
      MenuModule,
      RouterModule
   ],
   imports: [
      MenuModule,
      RouterModule.forRoot(
         [
            ...MENU_ROUTES,
            { path: 'messages', loadChildren: './messages/index#MessagesModule' },
            { path: 'settings', loadChildren: './settings/index#SettingsModule' }
         ],
         { enableTracing: true }
      )
   ]
})

export class AppRouter { }
