import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoziloDetaljnoComponent } from './vozilo-detaljno.component';

describe('VoziloDetaljnoComponent', () => {
  let component: VoziloDetaljnoComponent;
  let fixture: ComponentFixture<VoziloDetaljnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoziloDetaljnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoziloDetaljnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
