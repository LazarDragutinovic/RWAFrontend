import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopravkaDetaljnoComponent } from './popravka-detaljno.component';

describe('PopravkaDetaljnoComponent', () => {
  let component: PopravkaDetaljnoComponent;
  let fixture: ComponentFixture<PopravkaDetaljnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopravkaDetaljnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopravkaDetaljnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
