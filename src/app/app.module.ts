
/*
 * Copyright (C) 2016 Stratio (http://stratio.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule, ApplicationRef} from '@angular/core';
import { AppStore } from './app.store';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { EgeoModule } from '@stratio/egeo';

import { AppComponent } from './app.component';
import { AppRouter } from './app.router';
import { ConfigService, INITIALIZER, TRANSLATE_CONFIG } from '@app/core';
import { removeNgStyles, createNewHosts, createInputTransfer, bootloader } from '@angularclass/hmr';
import { SharedModule } from '@app/shared';
import { Error404Component } from '@app/errors/error-404/error-404.component';

@NgModule({
   bootstrap: [ AppComponent ],
   declarations: [ AppComponent, Error404Component ],
   imports: [
      AppRouter,
      BrowserModule,
      EgeoModule.forRoot(),
      HttpModule,
      SharedModule,
      TranslateModule.forRoot(TRANSLATE_CONFIG)
   ],
   providers: [
      ConfigService,
      AppStore,
      INITIALIZER
   ]
})

export class AppModule { 

constructor(public appRef: ApplicationRef, public appStore: AppStore) {}
  hmrOnInit(store: any) {
    if (!store || !store.state) { return; }
    console.log('HMR store', JSON.stringify(store, null, 2));
    // restore state
    this.appStore.setState(store.state);
    // restore input values
    if ('restoreInputValues' in store) { store.restoreInputValues(); }
    this.appRef.tick();
    Object.keys(store).forEach(prop => delete store[prop]);
  }
  hmrOnDestroy(store: any) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    const currentState = this.appStore.getState();
    store.state = currentState;
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store: any) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
