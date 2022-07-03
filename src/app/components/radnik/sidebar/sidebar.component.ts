import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pozicija, Radnik } from 'src/app/models/radnik';
import { appState } from 'src/app/State/appState';
import { logoutRadnik } from 'src/app/State/korisnik/korisnik.action';
import { korisnikSelektor } from 'src/app/State/korisnik/korisnik.selector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private store: Store<appState>) { }

  @Input() prikaziSidebar: EventEmitter<boolean> | null = null;
  klase : string = "Sidebar";

  ukloniSidebar(){
    this.prikaziSidebar?.emit(false);
  }

  ngOnInit(): void {
    this.store.select(korisnikSelektor).subscribe(x=>{
      this.radnik = <Radnik>x.korisnik
      if(x.korisnik) this.loginovan = true;
      else { 
        this.loginovan = false;
        this.mehanicar = false;
        this.sluzbenik = false;
        this.upravnik = false;
      }
      if(x.korisnik) {
        if(this.radnik.pozicija == Pozicija.UPRAVNIK) this.upravnik = true;
        if(this.radnik.pozicija == Pozicija.SLUZBENIK) this.sluzbenik = true;
        if(this.radnik.pozicija == Pozicija.MEHANICAR) this.mehanicar = true;
      }
    })

    if(this.prikaziSidebar) {
      this.prikaziSidebar.subscribe(x=>{
        if(x) this.klase = "Sidebar SidebarActive"
        else this.klase = "Sidebar"
      })
    }
  }

  radnik : Radnik | null = null;


  loginovan:boolean = false;

  upravnik:boolean = false;

  mehanicar: boolean = false;

  sluzbenik: boolean = false;


  logout() {
    this.store.dispatch(logoutRadnik());
  }
}
