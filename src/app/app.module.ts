import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouter } from './app.router';
import { Repository } from './repository';

@NgModule({
   bootstrap: [ AppComponent ],
   declarations: [ AppComponent ],
   imports: [
      AppRouter,
      BrowserModule
   ],
   providers: [Repository]
})

export class AppModule { }
