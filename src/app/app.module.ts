import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { EgeoModule } from 'egeo/egeo';

import { AppComponent } from './app.component';

@NgModule({
   bootstrap: [ AppComponent ],
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      EgeoModule.forRoot(),
      TranslateModule.forRoot()
   ]
})

export class AppModule { }
