import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, Injectable, provide, enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { HTTP_PROVIDERS, Http } from '@angular/http';
import { TranslateService, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  provide(TranslateLoader, {
    useFactory: (http: Http) => new TranslateStaticLoader(http, '/src/assets/langs', '.json'),
    deps: [Http]
  }),
  TranslateService
]);
