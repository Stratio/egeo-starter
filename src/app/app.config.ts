import { APP_INITIALIZER } from '@angular/core';
// import { Http } from '@angular/http';
// import { TranslateStaticLoader, TranslateLoader } from 'ng2-translate';

import { JsonService } from "@app/utils";

// Configuration from config.json
export function getConfigJson(config:JsonService):any {
   return () => config.load('config.json');
}

export const CONFIG:any = {
   provide: APP_INITIALIZER,
   useFactory: getConfigJson,
   deps: [ JsonService ],
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
