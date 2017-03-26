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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from 'ng2-translate';
import { EgeoModule } from '@stratio/egeo';

import { AppComponent, AppRoutingModule, TRANSLATE_CONFIG } from '.';
import { SharedModule } from '@starter/shared';
import { ErrorsModule } from '@starter/errors';

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
