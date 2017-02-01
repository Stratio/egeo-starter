import { Http } from '@angular/http';
import { TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';

function createTranslateLoader(http: Http) {
   return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

export const TRANSLATE_CONFIG:any = {
   provide: TranslateLoader,
   useFactory: createTranslateLoader,
   deps: [Http]
};
