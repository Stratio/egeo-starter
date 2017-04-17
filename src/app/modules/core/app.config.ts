import { APP_INITIALIZER } from '@angular/core';
import { ConfigService } from "@app/core";
// import { Http } from '@angular/http';
// import { TranslateStaticLoader, TranslateLoader } from 'ng2-translate';

// Configuration from config.json
export function getConfigJson(config:ConfigService):any {
   return () => config.load('config.json');
}

export const INITIALIZER:any = {
   provide: APP_INITIALIZER,
   useFactory: getConfigJson,
   deps: [ ConfigService ],
   multi: true
};


// Configuration for translate
// function createTranslateLoader(http:Http):any {
//    return new TranslateStaticLoader(http, './assets/i18n', '.json');
// }
//
// export const TRANSLATE_CONFIG:any = {
//    provide: TranslateLoader,
//    useFactory: createTranslateLoader,
//    deps: [ Http ]
// };
