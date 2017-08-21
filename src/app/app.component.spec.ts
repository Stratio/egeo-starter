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
import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('App', () => {
   // provide our implementations or mocks to the dependency injector
   beforeEach(() => TestBed.configureTestingModule({
         declarations: [AppComponent]
      })
   );

   it('should be true', () => {
      expect(true).toEqual(true);
   });
});
