import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoziloDodajGlavnaVoziloLogickoComponent } from './vozilo-dodaj-glavna-vozilo-logicko.component';

describe('VoziloDodajGlavnaVoziloLogickoComponent', () => {
  let component: VoziloDodajGlavnaVoziloLogickoComponent;
  let fixture: ComponentFixture<VoziloDodajGlavnaVoziloLogickoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoziloDodajGlavnaVoziloLogickoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoziloDodajGlavnaVoziloLogickoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
