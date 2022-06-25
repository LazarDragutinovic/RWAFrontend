import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljnoAutomobilComponent } from './detaljno-automobil.component';

describe('DetaljnoAutomobilComponent', () => {
  let component: DetaljnoAutomobilComponent;
  let fixture: ComponentFixture<DetaljnoAutomobilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaljnoAutomobilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljnoAutomobilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
