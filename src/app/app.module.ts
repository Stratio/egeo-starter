import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from 'ng2-translate';
import { EgeoModule } from 'egeo/egeo';

import { AppComponent, AppRoutingModule, TRANSLATE_CONFIG } from '.';
import { SharedModule } from '@starter/shared';
import { ErrorsModule } from "@starter/errors/errors.module";

@NgModule({
   bootstrap: [ AppComponent ],
   declarations: [
      AppComponent
   ],
   imports: [
      AppRoutingModule,
      BrowserModule,
      EgeoModule.forRoot(),
      ErrorsModule,
      TranslateModule.forRoot(TRANSLATE_CONFIG),
      SharedModule
   ],
   exports: [
      ErrorsModule,
      SharedModule
   ]
})

export class AppModule { }
