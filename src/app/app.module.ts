import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { INITIALIZER, ConfigService } from "@app/core";
import { AppRouter } from './app.router';

@NgModule({
   bootstrap: [ AppComponent ],
   declarations: [ AppComponent ],
   imports: [
      AppRouter,
      BrowserModule,
      HttpModule
   ],
   providers: [
      ConfigService,
      INITIALIZER
   ]
})

export class AppModule { }
