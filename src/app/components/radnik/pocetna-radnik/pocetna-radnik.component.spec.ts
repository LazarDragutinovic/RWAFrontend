import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocetnaRadnikComponent } from './pocetna-radnik.component';

describe('PocetnaRadnikComponent', () => {
  let component: PocetnaRadnikComponent;
  let fixture: ComponentFixture<PocetnaRadnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocetnaRadnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocetnaRadnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
