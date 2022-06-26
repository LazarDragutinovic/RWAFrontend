import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjeIznajmComponent } from './dodavanje-iznajm.component';

describe('DodavanjeIznajmComponent', () => {
  let component: DodavanjeIznajmComponent;
  let fixture: ComponentFixture<DodavanjeIznajmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodavanjeIznajmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjeIznajmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
