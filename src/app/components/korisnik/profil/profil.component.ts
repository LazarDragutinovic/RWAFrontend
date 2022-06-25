import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/State/appState';
import { logoutKorisnik } from 'src/app/State/korisnik/korisnik.action';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
  }

  logout(){
    this.store.dispatch(logoutKorisnik());
  }
}
