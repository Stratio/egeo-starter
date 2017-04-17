import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConfigService {

   private _config:any;

   constructor(private http:Http) { }

   get config():any {
      return this._config;
   }

   set config(data:any) {
      this._config = data;
   }

   load(url:string):Promise<any> {
      return this.http
         .get(url)
         .map((res:Response) => res.json())
         .toPromise()
         .then((data:any) => this.config = data)
         .catch((err:any) => Promise.resolve());
   }
}
