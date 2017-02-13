import { NgModule } from '@angular/core';

import {
   ExamplesComponent, ExamplesRoutingModule, FormExampleComponent,
   DropdownExampleComponent, RadioMenuExample
} from '.';
import { SharedModule } from "@starter/shared";
import { ReactiveFormsModule } from "@angular/forms";
import { EgeoModule } from "egeo";

@NgModule({
   declarations: [
      DropdownExampleComponent,
      ExamplesComponent,
      FormExampleComponent,
      RadioMenuExample
   ],
   imports: [
      EgeoModule,
      ExamplesRoutingModule,
      ReactiveFormsModule,
      SharedModule
   ]
})

export class ExamplesModule { }