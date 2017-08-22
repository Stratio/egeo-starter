/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
import { Http } from '@angular/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: Http): any {
   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const TRANSLATE_CONFIG: any = {
   loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [ Http ]
   }
};
