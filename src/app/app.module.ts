import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CONFIG } from "./app.config";
import { AppRouter } from './app.router';
import { JsonService } from "@app/utils";
import { Repository } from './repository';

@NgModule({
   bootstrap: [ AppComponent ],
   declarations: [ AppComponent ],
   imports: [
      AppRouter,
      BrowserModule,
      HttpModule
   ],
   providers: [
      JsonService,
      Repository,
      CONFIG
   ]
})

export class AppModule { }
