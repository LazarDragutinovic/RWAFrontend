import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Iznajmljivanje } from 'src/app/models/iznajmljivanje';
import { appState } from 'src/app/State/appState';
import { selectIznajmnjivanja } from 'src/app/State/iznajmljivanje/iznajmljivanje.selector';
import { logoutKorisnik } from 'src/app/State/korisnik/korisnik.action';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
    this.iznajmljivanja= this.store.select(selectIznajmnjivanja)
  }

  iznajmljivanja : Observable<Iznajmljivanje[]> = of([])

  cenaUkupna(iznajmljivanje: Iznajmljivanje) {
    if(iznajmljivanje.vozilo?.cenaPoDanu == undefined || iznajmljivanje.dana == undefined) return "Doslo je do greske..."
    else return (iznajmljivanje.vozilo.cenaPoDanu * iznajmljivanje.dana)+" dinara."
  }

  logout(){
    this.store.dispatch(logoutKorisnik());
  }
}
