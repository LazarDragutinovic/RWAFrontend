import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistracijaRadnikComponent } from './registracija-radnik.component';

describe('RegistracijaRadnikComponent', () => {
  let component: RegistracijaRadnikComponent;
  let fixture: ComponentFixture<RegistracijaRadnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistracijaRadnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistracijaRadnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
