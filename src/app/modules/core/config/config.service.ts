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
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ConfigService {

   private _config: any;

   constructor(private http: Http) { }

   get config(): any {
      return this._config;
   }

   set config(data: any) {
      this._config = data;
   }

   load(url: string): Promise<any> {
      return this.http
         .get(url)
         .map((res: Response) => res.json())
         .toPromise()
         .then((data: any) => this.config = data)
         .catch((err: any) => Promise.resolve());
   }
}
