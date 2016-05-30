import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'st-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
  pipes: [TranslatePipe],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  constructor(translate: TranslateService) {
    let userLang = navigator.language.split('-')[0];
    userLang = /(es|en)/gi.test(userLang) ? userLang : 'en';

    translate.setDefaultLang('en');
    translate.use(userLang);
  }
}
