import { TestBed } from '@angular/core/testing';

import { SastanciService } from './sastanci.service';

describe('SastanciService', () => {
  let service: SastanciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SastanciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
