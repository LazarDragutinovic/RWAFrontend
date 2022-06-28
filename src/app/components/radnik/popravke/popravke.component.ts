import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, filter, map, switchMap } from 'rxjs';
import { Centar } from 'src/app/models/centar';
import { Popravka } from 'src/app/models/popravka';
import { Pozicija, Radnik } from 'src/app/models/radnik';
import { Vozilo } from 'src/app/models/vozilo';
import { PopravkeService } from 'src/app/services/popravke.service';
import { VozilaService } from 'src/app/services/vozila.service';
import { appState } from 'src/app/State/appState';
import { preuzmiCentarZaRadnika } from 'src/app/State/korisnik/korisnik.action';
import { korisnikSelektor } from 'src/app/State/korisnik/korisnik.selector';

@Component({
  selector: 'app-popravke',
  templateUrl: './popravke.component.html',
  styleUrls: ['./popravke.component.css']
})
export class PopravkeComponent implements OnInit {

  constructor(private store: Store<appState>,private formBuilder: FormBuilder, private popravkaService: PopravkeService,private voziloService: VozilaService) { }

  voziloForm = this.formBuilder.group({
    proizvodjac:["",[Validators.required]]
  })

  izabranoVoziloForm = this.formBuilder.group({
    id:['',[Validators.required]]
  })

  dodajPopravku() {
    if(this.izabranoVoziloForm.valid) {
      if(this.izabranoVoziloForm.value.id < 0) return
      let vecNaPopravku = this.popravke.find(x=>x.vozilo?.id == this.izabranoVoziloForm.value.id && x.obavljena == false)
      if(vecNaPopravku) {
        alert("Vozilo je vec na popravci.")
        return
      }
      this.popravkaService.prijaviZaPopravkuVozilo(this.izabranoVoziloForm.value.id).subscribe(x=>{
        this.popravke = [x,...this.popravke]
      })
    }
  }


  popravke: Popravka[] = [];
  mogucaVozila: Vozilo[] = []

  sluzbenik(){
    if(this.radnik && this.radnik.pozicija == Pozicija.SLUZBENIK) return true;
    return false
  }

  mehanicar(){
    if(this.radnik && this.radnik.pozicija == Pozicija.MEHANICAR) return true;
    return false
  }
  

  radnik: Radnik | null = null;
  centar: Centar | null = null;
  ngOnInit(): void {

    

    this.store.select(korisnikSelektor).subscribe(x=>{
      
      if(x.korisnik) {
        this.radnik = <Radnik>x.korisnik
        if(this.radnik)
        if(!x.centar) this.store.dispatch(preuzmiCentarZaRadnika({id:this.radnik.id}))
        this.store.select(korisnikSelektor).subscribe(x=>{
          if(x.centar) {
            this.centar = x.centar
            this.popravkaService.popravkeCentra(x.centar.id).subscribe(x=>{
              this.popravke =x;
            })
          }
          
        })
        
      }
    })
    this.voziloForm.valueChanges.pipe(debounceTime(500),map(x=>x.proizvodjac),filter(x=>{return x.length>1}),
                                      switchMap(x=>this.voziloService.pretraziVozilaBezGrada(x)))
                                .subscribe(x=>{
                                
                                  if(this.centar){
                                     
                                      x=x.filter(v=>v.centar?.id == this.centar?.id)
                                      this.mogucaVozila = x;
                                  }
                                })
  }

}
