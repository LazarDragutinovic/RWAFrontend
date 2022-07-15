import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/State/appState';
import { logoutKorisnik } from 'src/app/State/korisnik/korisnik.action';
import { korisnikSelektor } from 'src/app/State/korisnik/korisnik.selector';
import { korisnikState } from 'src/app/State/korisnik/korisnikState';

@Component({
  selector: 'app-glavna',
  templateUrl: './glavna.component.html',
  styleUrls: ['./glavna.component.css']
})
export class GlavnaComponent implements OnInit {

  constructor(private store:Store<appState>,private router: Router) { }
  korisnik: Observable<korisnikState> = this.store.select(korisnikSelektor)
  logedin: boolean = false;
  ngOnInit(): void {
    this.korisnik.subscribe(x=>{
      
      if(x.korisnik != null) this.logedin = true;
      else {
        this.logedin = false
      }
    })
    this.router.navigateByUrl("/")
  }

  logout() {
    this.store.dispatch(logoutKorisnik())
    let subsc = this.store.select("korisnikState").subscribe(x=>{
      if(x.korisnik == null) {
        this.router.navigateByUrl("/");
        subsc.unsubscribe();
      } 
    })
  }

}
