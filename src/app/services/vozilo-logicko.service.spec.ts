import { TestBed } from '@angular/core/testing';

import { VoziloLogickoService } from './vozilo-logicko.service';

describe('VoziloLogickoService', () => {
  let service: VoziloLogickoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoziloLogickoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
