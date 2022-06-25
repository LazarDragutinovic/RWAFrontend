import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopravkeComponent } from './popravke.component';

describe('PopravkeComponent', () => {
  let component: PopravkeComponent;
  let fixture: ComponentFixture<PopravkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopravkeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopravkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
