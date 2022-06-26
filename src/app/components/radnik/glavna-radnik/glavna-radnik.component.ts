import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Pozicija, Radnik } from 'src/app/models/radnik';
import { appState } from 'src/app/State/appState';
import { loginRadnika, logoutRadnik } from 'src/app/State/korisnik/korisnik.action';

@Component({
  selector: 'app-glavna-radnik',
  templateUrl: './glavna-radnik.component.html',
  styleUrls: ['./glavna-radnik.component.css']
})
export class GlavnaRadnikComponent implements OnInit {

  constructor(private store: Store<appState>,private router: Router) { }
  loginovan: boolean = false;
  upravnik: boolean = false;
  sluzbenik: boolean = false;
  mehanicar: boolean = false;

  ngOnInit(): void {
    this.store.select("korisnikState").subscribe(x=>{
      if(x.korisnik != null) {
        this.loginovan = true;
        let radnik = <Radnik>x.korisnik
        if(radnik.pozicija == Pozicija.MEHANICAR) this.mehanicar = true;
        if(radnik.pozicija == Pozicija.SLUZBENIK) this.sluzbenik = true;
        if(radnik.pozicija == Pozicija.UPRAVNIK) this.upravnik = true;
      }
      else {
        this.loginovan = false;
        this.mehanicar = false;
        this.sluzbenik = false;
        this.upravnik = false;
      }
    })
  }

  logout() {
    if(confirm("Da li stvarno zelite da se izlogujete")) {
      this.store.dispatch(logoutRadnik())
      this.router.navigateByUrl("/radnik/Login")
    }
  }



}
