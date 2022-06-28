import { TestBed } from '@angular/core/testing';

import { PopravkeService } from './popravke.service';

describe('PopravkeService', () => {
  let service: PopravkeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopravkeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
