import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Vozilo } from 'src/app/models/vozilo';
import { VozilaService } from 'src/app/services/vozila.service';
import { appState } from 'src/app/State/appState';
import { TipKorisnika } from 'src/app/State/korisnik/korisnikState';
import { odabranoVoziloSelector } from 'src/app/State/vozila/vozila.selector';

@Component({
  selector: 'app-detaljno-automobil',
  templateUrl: './detaljno-automobil.component.html',
  styleUrls: ['./detaljno-automobil.component.css']
})
export class DetaljnoAutomobilComponent implements OnInit {

  constructor(private store: Store<appState>,private domSanitizer:DomSanitizer, private voziloService: VozilaService) { }

  vozilo: Vozilo | undefined  = undefined
  voziloobs: Observable<Vozilo | undefined> = of(undefined) 
  brojLajkova: number = 0;
  imaKorisnika: boolean = false;
  likeId:number = -1;
  ngOnInit(): void {
    this.voziloobs = this.store.select(odabranoVoziloSelector);
    this.voziloobs.subscribe(x=>{
      this.vozilo = x;
      if(this.vozilo != undefined) 
        this.voziloService.voziloLajkovi(this.vozilo?.id).subscribe(bl=>{
          this.brojLajkova = bl
        })
    })
    this.store.select('korisnikState').subscribe(x=>{
      if(x.korisnik != null && x.tip == TipKorisnika.KORISNIK) {
        this.imaKorisnika = true;
        if(this.vozilo !== undefined) {
          this.voziloService.preuzmiLike(x.korisnik.id,this.vozilo.id).subscribe(id=>{
            this.likeId = id;
          })
        }
      }
      
    })
    
  }

  lajkuj() {
    this.store.select('korisnikState').subscribe(x=>{
      if(x.korisnik!= null && x.tip == TipKorisnika.KORISNIK && this.vozilo != undefined && this.likeId == -1)
        { 
          this.voziloService.lajkuj(x.korisnik?.id,this.vozilo?.id).subscribe(x=>{
            this.brojLajkova+=1
            this.likeId = x;
            
          })
        }
    })
  }

  dislike(){
    if(this.likeId != -1)this.voziloService.dislike(this.likeId)
                              .subscribe(x=>{
                                        this.brojLajkova-=1;
                                        this.likeId = -1;
                                      })
  }
  sanitizeUlr(url:string): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
}
