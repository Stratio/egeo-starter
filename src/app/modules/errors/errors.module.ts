import { NgModule } from '@angular/core';
import { errorsComponents } from "@starter/errors";
import { SharedModule } from "@starter/shared";

@NgModule({
   declarations: [
      ...errorsComponents
   ],
   imports: [
      SharedModule
   ]
})

export class ErrorsModule { }