import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRadnikComponent } from './login-radnik.component';

describe('LoginRadnikComponent', () => {
  let component: LoginRadnikComponent;
  let fixture: ComponentFixture<LoginRadnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRadnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRadnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
