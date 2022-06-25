import { TestBed } from '@angular/core/testing';

import { CentriService } from './centri.service';

describe('CentriService', () => {
  let service: CentriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
