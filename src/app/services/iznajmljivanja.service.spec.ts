import { TestBed } from '@angular/core/testing';

import { IznajmljivanjaService } from './iznajmljivanja.service';

describe('IznajmljivanjaService', () => {
  let service: IznajmljivanjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IznajmljivanjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
