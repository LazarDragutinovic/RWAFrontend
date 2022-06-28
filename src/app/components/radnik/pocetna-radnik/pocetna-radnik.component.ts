import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Centar } from 'src/app/models/centar';
import { Pozicija, Radnik } from 'src/app/models/radnik';
import { appState } from 'src/app/State/appState';
import { centarSelector, korisnikSelektor, radnikSelektor } from 'src/app/State/korisnik/korisnik.selector';

@Component({
  selector: 'app-pocetna-radnik',
  templateUrl: './pocetna-radnik.component.html',
  styleUrls: ['./pocetna-radnik.component.css']
})
export class PocetnaRadnikComponent implements OnInit {

  constructor(private store: Store<appState>) { }

  radnik: Observable<Radnik | null> = of(null) 

  centar: Centar | null = null;
  ngOnInit(): void {
    this.radnik = this.store.select(radnikSelektor);
    this.radnik.subscribe(x=>{
      if(x!= null && x.pozicija != Pozicija.UPRAVNIK) this.store.select(centarSelector)
                                                      .subscribe(x=>{
                                                        this.centar=x
                                                      })
    })
  }

}
