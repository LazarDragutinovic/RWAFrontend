import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SastanakComponent } from './sastanak.component';

describe('SastanakComponent', () => {
  let component: SastanakComponent;
  let fixture: ComponentFixture<SastanakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SastanakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SastanakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
