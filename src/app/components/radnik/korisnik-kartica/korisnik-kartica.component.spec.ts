import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikKarticaComponent } from './korisnik-kartica.component';

describe('KorisnikKarticaComponent', () => {
  let component: KorisnikKarticaComponent;
  let fixture: ComponentFixture<KorisnikKarticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorisnikKarticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikKarticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
