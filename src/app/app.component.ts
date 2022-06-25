import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from './State/appState';
import { loginKorisnika, validirajKorisnika, validirajRadnika } from './State/korisnik/korisnik.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rent-car-frontend';

  constructor(private store: Store<appState>){}
  ngOnInit(){
    this.store.dispatch(validirajKorisnika());
    this.store.dispatch(validirajRadnika());
    this.store.select('korisnikState').subscribe(x=>console.log(x))
    //this.store.dispatch(loginKorisnika({email:"Deki@gmail.com",lozinka:"DA"}))
  }
}
