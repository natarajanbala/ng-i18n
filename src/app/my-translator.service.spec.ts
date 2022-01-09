import { TestBed } from '@angular/core/testing';

import { MyTranslatorService } from './my-translator.service';

describe('MyTranslatorService', () => {
  let service: MyTranslatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTranslatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
