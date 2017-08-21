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
import { APP_INITIALIZER } from '@angular/core';
import { ConfigService } from '@app/core';

export function getConfigJson(config: ConfigService): any {
   return () => config.load('config.json');
}

export const INITIALIZER: any = {
   provide: APP_INITIALIZER,
   useFactory: getConfigJson,
   deps: [ ConfigService ],
   multi: true
};
