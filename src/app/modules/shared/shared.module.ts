import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "ng2-translate";

@NgModule({
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