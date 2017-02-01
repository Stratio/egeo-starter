import { NgModule } from '@angular/core';

import { ExampleComponent, ExampleRoutingModule } from '.';
import { SharedModule } from "@starter/shared";

@NgModule({
   declarations: [
      ExampleComponent
   ],
   imports: [
      ExampleRoutingModule,
      SharedModule
   ]
})

export class ExampleModule { }