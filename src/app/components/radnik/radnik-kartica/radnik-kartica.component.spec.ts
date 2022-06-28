import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadnikKarticaComponent } from './radnik-kartica.component';

describe('RadnikKarticaComponent', () => {
  let component: RadnikKarticaComponent;
  let fixture: ComponentFixture<RadnikKarticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadnikKarticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadnikKarticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
