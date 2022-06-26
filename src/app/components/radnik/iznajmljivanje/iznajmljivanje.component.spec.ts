import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IznajmljivanjeComponent } from './iznajmljivanje.component';

describe('IznajmljivanjeComponent', () => {
  let component: IznajmljivanjeComponent;
  let fixture: ComponentFixture<IznajmljivanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IznajmljivanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IznajmljivanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
