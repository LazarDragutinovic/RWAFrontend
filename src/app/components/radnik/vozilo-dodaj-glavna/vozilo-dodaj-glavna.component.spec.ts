import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoziloDodajGlavnaComponent } from './vozilo-dodaj-glavna.component';

describe('VoziloDodajGlavnaComponent', () => {
  let component: VoziloDodajGlavnaComponent;
  let fixture: ComponentFixture<VoziloDodajGlavnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoziloDodajGlavnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoziloDodajGlavnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
