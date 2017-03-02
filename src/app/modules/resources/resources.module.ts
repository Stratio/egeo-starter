import { NgModule } from '@angular/core';

import {
   ResourcesComponent, ResourcesRoutingModule, InfoCardExampleComponent
} from '.';
import { SharedModule } from "@starter/shared";
import { EgeoModule } from "egeo";

@NgModule({
   declarations: [
      ResourcesComponent,
      InfoCardExampleComponent
   ],
   imports: [
      EgeoModule,
      ResourcesRoutingModule,
      SharedModule
   ]
})

export class ResourcesModule {
}