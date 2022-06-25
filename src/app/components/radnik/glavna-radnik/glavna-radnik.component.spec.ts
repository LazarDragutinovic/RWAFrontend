import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlavnaRadnikComponent } from './glavna-radnik.component';

describe('GlavnaRadnikComponent', () => {
  let component: GlavnaRadnikComponent;
  let fixture: ComponentFixture<GlavnaRadnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlavnaRadnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlavnaRadnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
