import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { EgeoModule } from 'egeo/egeo';

import { LayoutComponent, LayoutRoutingModule } from '.';
import { SharedModule } from "@starter/shared";

@NgModule({
   declarations: [
      LayoutComponent
   ],
   imports: [
      EgeoModule,
      FormsModule,
      LayoutRoutingModule,
      SharedModule
   ]
})

export class LayoutModule { }