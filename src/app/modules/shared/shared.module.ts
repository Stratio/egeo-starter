import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "ng2-translate";

import { sharedComponents } from "@starter/shared";

@NgModule({
   declarations: [
      ...sharedComponents
   ],
   imports: [
      CommonModule,
      TranslateModule
   ],
   exports: [
      CommonModule,
      TranslateModule
   ]
})

export class SharedModule { }