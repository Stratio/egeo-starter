import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EgeoModule } from 'egeo/egeo';

import { AppComponent } from './app.component';

@NgModule({
   bootstrap: [ AppComponent ],
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      EgeoModule.forRoot()
   ]
})

export class AppModule { }
