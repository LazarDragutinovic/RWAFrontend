import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoziloDodajGlavnaVoziloComponent } from './vozilo-dodaj-glavna-vozilo.component';

describe('VoziloDodajGlavnaVoziloComponent', () => {
  let component: VoziloDodajGlavnaVoziloComponent;
  let fixture: ComponentFixture<VoziloDodajGlavnaVoziloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoziloDodajGlavnaVoziloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoziloDodajGlavnaVoziloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
