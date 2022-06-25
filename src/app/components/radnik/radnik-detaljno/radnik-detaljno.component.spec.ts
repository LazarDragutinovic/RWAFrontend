import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadnikDetaljnoComponent } from './radnik-detaljno.component';

describe('RadnikDetaljnoComponent', () => {
  let component: RadnikDetaljnoComponent;
  let fixture: ComponentFixture<RadnikDetaljnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadnikDetaljnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadnikDetaljnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
