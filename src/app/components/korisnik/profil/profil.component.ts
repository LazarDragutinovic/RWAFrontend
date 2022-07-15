import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Iznajmljivanje } from 'src/app/models/iznajmljivanje';
import { iznajmljivanjeUprosceno } from 'src/app/models/iznajmljivanje-uprosceno';
import { IznajmljivanjaService } from 'src/app/services/iznajmljivanja.service';
import { appState } from 'src/app/State/appState';
import { selectIznajmnjivanja } from 'src/app/State/iznajmljivanje/iznajmljivanje.selector';
import { logoutKorisnik } from 'src/app/State/korisnik/korisnik.action';
import { korisnikSelektor } from 'src/app/State/korisnik/korisnik.selector';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private store: Store<appState>,private iznajmService: IznajmljivanjaService) { }

  ngOnInit(): void {
    this.store.select(korisnikSelektor)
              .subscribe(x=>{
                if(x.korisnik)
                  this.iznajmljivanja = this.iznajmService.preuzmiIznajmljivanjaKorisnika(x.korisnik?.id)
              })
    
  }

  iznajmljivanja : Observable<iznajmljivanjeUprosceno[]> = of([])

  rokZaVracanje(iznajmljivanje: iznajmljivanjeUprosceno) {
    let datum = new Date(iznajmljivanje.datum)
    let rok = new Date()
    rok.setDate(datum.getDate()+iznajmljivanje.dana)
    return rok.toLocaleDateString()
  }

  kasni(iznajmljivanje: iznajmljivanjeUprosceno) {
    let datum = new Date(iznajmljivanje.datum)
    let rok = new Date()
    rok.setDate(datum.getDate()+iznajmljivanje.dana)
    return rok.getDate() - new Date(Date.now()).getDate()
  }

  status(iznajmljivanje: iznajmljivanjeUprosceno) {
    if(iznajmljivanje.zavrseno) return "zavrseno";
    return "nije zavrseno"
  }

  logout(){
    this.store.dispatch(logoutKorisnik());
  }
}
