import { TestBed } from '@angular/core/testing';

import { VozilaService } from './vozila.service';

describe('VozilaService', () => {
  let service: VozilaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VozilaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
