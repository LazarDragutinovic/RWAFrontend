import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SastanakRadnikComponent } from './sastanak-radnik.component';

describe('SastanakRadnikComponent', () => {
  let component: SastanakRadnikComponent;
  let fixture: ComponentFixture<SastanakRadnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SastanakRadnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SastanakRadnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
