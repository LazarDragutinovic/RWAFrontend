import { Component, OnInit } from '@angular/core';
import { appState } from 'src/app/State/appState';
import {Store} from "@ngrx/store"
import { Pozicija, Radnik } from 'src/app/models/radnik';
import { korisnikSelektor } from 'src/app/State/korisnik/korisnik.selector';
import { Sastanak, Status } from 'src/app/models/sastanak';
import { SastanciService } from 'src/app/services/sastanci.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-sastanak',
  templateUrl: './sastanak.component.html',
  styleUrls: ['./sastanak.component.css']
})
export class SastanakComponent implements OnInit {

  constructor(private store: Store<appState>,
              private sastankService: SastanciService,
              private formBuilder: FormBuilder) { }

  radnik: Radnik | null = null;

  ngOnInit(): void {
    this.store.select(korisnikSelektor).subscribe(x=>{
      this.radnik = <Radnik>x.korisnik
      if(this.radnik){
        this.sastankService.preuzmiSveSastankeUpravnika(this.radnik.id).subscribe(x=>{
          this.sastanci = x;
        })
        this.sastankService.mojiSastanci(this.radnik.id).subscribe(x=>{
          this.mojiSastanci=x;
        })
      }
    })

    
  }

  mojiSastanci: Sastanak[] = []

  izaberiSastanak(sastanak: Sastanak | null) {
    this.izabraniSastanak = sastanak;
  }

  otkazi(id: number) {
    this.sastankService.otkazansastanak(id).subscribe(x=>{
      let s = this.sastanci.find(x=>x.id ==id)
      if(s) {
        s.status = Status.OTKAZAN;
        this.sastanci = [...this.sastanci]
      }
    })
  }

  izabraniSastanak: Sastanak | null = null; 

  odlozi(id: number) {
    this.sastankService.odlozensastanak(id).subscribe(x=>{
      let s = this.sastanci.find(x=>x.id ==id)
      if(s) {
        s.status = Status.ODLOZEN;
        this.sastanci = [...this.sastanci]
      }
    })
  }

  ok(id: number) {
    this.sastankService.oksastanak(id).subscribe(x=>{
      let s = this.sastanci.find(x=>x.id ==id)
      if(s) {
        s.status = Status.OK;
        this.sastanci = [...this.sastanci]
      }
    })
  }

  prikaziOtkazi(sastanak:Sastanak){
    return sastanak.status != Status.OTKAZAN
  }
  prikaziOk(sastanak:Sastanak){
    return sastanak.status != Status.OK
  }
  prikaziOdlozi(sastanak:Sastanak){
    return sastanak.status != Status.ODLOZEN
  }

  lepFormatVreme(vreme: Date) {
    return new Date(vreme).toLocaleString();
  }

  kreirajForm = this.formBuilder.group({
    tema:["",[Validators.required]],
    mesto:["",[Validators.required]],
    vreme:["",[Validators.required]]
  })


  kreiraj() {
    if(this.kreirajForm.valid) {
      const {tema,mesto,vreme} = this.kreirajForm.value
      if(this.radnik)
        this.sastankService.kreirajSastanak(this.radnik.id,tema,mesto,vreme).subscribe(x=>{
          this.sastanci = [...this.sastanci,x]
          this.kreirajForm.reset();
          alert("Uspesno kreiran sastanak");
        })
    }
  }

  sastanci: Sastanak[] = []

  get isUpravnik():boolean {
    if(this.radnik && this.radnik.pozicija == Pozicija.UPRAVNIK) {
      return true;
    }
    return false
  }

}
