import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoziloKarticaComponent } from './vozilo-kartica.component';

describe('VoziloKarticaComponent', () => {
  let component: VoziloKarticaComponent;
  let fixture: ComponentFixture<VoziloKarticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoziloKarticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoziloKarticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
