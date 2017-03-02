import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
   encapsulation: ViewEncapsulation.None,
   selector: 'st-app',
   styleUrls: ['./app.styles.scss'],
   templateUrl: './app.template.html'
})

export class AppComponent {
   constructor(translate:TranslateService) {
      let userLang:string = navigator.language.split('-')[0];
      userLang = /(es|en)/gi.test(userLang) ? userLang : 'en';
      translate.setDefaultLang('en');
      translate.use(userLang);
   }
}
