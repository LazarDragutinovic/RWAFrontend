import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/State/appState';
import { korisnikSelektor } from 'src/app/State/korisnik/korisnik.selector';
import { korisnikState } from 'src/app/State/korisnik/korisnikState';

@Component({
  selector: 'app-glavna',
  templateUrl: './glavna.component.html',
  styleUrls: ['./glavna.component.css']
})
export class GlavnaComponent implements OnInit {

  constructor(private store:Store<appState>) { }
  korisnik: Observable<korisnikState> = this.store.select(korisnikSelektor)
  logedin: boolean = false;
  ngOnInit(): void {
    this.korisnik.subscribe(x=>{
      if(x.korisnik != null) this.logedin = true;
    })
  }

}
