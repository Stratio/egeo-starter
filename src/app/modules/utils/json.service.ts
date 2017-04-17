import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JsonService {

   private _jsonData:any;

   constructor(private http:Http) { }

   get jsonData():any {
      return this._jsonData;
   }

   set jsonData(data:any) {
      this._jsonData = data;
   }

   load(url:string):Promise<any> {
      return this.http
         .get(url)
         .map((res:Response) => res.json())
         .toPromise()
         .then((data:any) => this.jsonData = data)
         .catch((err:any) => Promise.resolve());
   }
}
