import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('App', () => {
   // provide our implementations or mocks to the dependency injector
   beforeEach(() => TestBed.configureTestingModule({
         declarations: [AppComponent]
      })
   );

   it('should be true', () => {
      expect(true).toEqual(true);
   });
});