import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VozilaComponent } from './vozila.component';

describe('VozilaComponent', () => {
  let component: VozilaComponent;
  let fixture: ComponentFixture<VozilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VozilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VozilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
