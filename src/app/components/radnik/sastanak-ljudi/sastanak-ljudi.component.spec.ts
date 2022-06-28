import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SastanakLjudiComponent } from './sastanak-ljudi.component';

describe('SastanakLjudiComponent', () => {
  let component: SastanakLjudiComponent;
  let fixture: ComponentFixture<SastanakLjudiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SastanakLjudiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SastanakLjudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
