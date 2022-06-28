import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Centar } from 'src/app/models/centar';
import { Pozicija, Radnik } from 'src/app/models/radnik';
import { CentriService } from 'src/app/services/centri.service';
import { RadnikService } from 'src/app/services/radnik.service';
import { appState } from 'src/app/State/appState';
import { loadCentri } from 'src/app/State/centri/centri.action';
import { centriSelector } from 'src/app/State/centri/centri.selector';

@Component({
  selector: 'app-radnik-detaljno',
  templateUrl: './radnik-detaljno.component.html',
  styleUrls: ['./radnik-detaljno.component.css']
})
export class RadnikDetaljnoComponent implements OnInit {

  constructor(private radnikService: RadnikService, private store: Store<appState>,private centarService: CentriService) { }

  @Input() radnik:Radnik | null = null;
  @Output() Emiter: EventEmitter<null> = new EventEmitter()
  ngOnInit(): void {
    this.store.select(centriSelector).subscribe(centri=>{
      if(centri.length == 0) {
        this.store.dispatch(loadCentri());

      }
      this.centri = centri;
    })
    if(this.radnik)
      this.centarService.preuzmiCentarRadnika(this.radnik.id).subscribe(centar=>{
        this.centarRadnika = centar
        console.log(centar)
      })
  }
  centarRadnika : Centar | null = null;

  centri: Centar[] = []

  nazad() {
    this.Emiter.emit(null);
  }

  rasporedi(idc:number) {
    if(this.radnik) {
      this.radnikService.rasporediRadnika(this.radnik.id,idc)
                        .subscribe(x=>{
                          this.centarRadnika = x
                        })
    }
  }

  odobriNalog() {
    if(this.radnik)
      this.radnikService.odobriNalog(this.radnik.id).subscribe(()=>{
        if(this.radnik)
          this.radnik.odobren = true;
      })
  }
  
  zabraniNalog() {
    if(this.radnik) {
      this.radnikService.zabraniNalog(this.radnik.id).subscribe(()=>{
        if(this.radnik)
          this.radnik.odobren = false;
      })
    }
  }

  preimenujUSluzbenika(){
    if(this.radnik)
      this.radnikService.postaviPoziciju(this.radnik.id,Pozicija.SLUZBENIK)
                        .subscribe(x=>{
                          if(this.radnik)
                            this.radnik.pozicija = Pozicija.SLUZBENIK
                        })
  }

  preimenujUMehanicara(){
    if(this.radnik)
      this.radnikService.postaviPoziciju(this.radnik.id,Pozicija.MEHANICAR)
                        .subscribe(x=>{
                          if(this.radnik)
                            this.radnik.pozicija = Pozicija.MEHANICAR
                        })
  }

  prikaziSluzbenik() {
    if(this.radnik && this.radnik.pozicija != Pozicija.SLUZBENIK) return true;
    return false;
  }

  prikaziMehanicar() {
    if(this.radnik && this.radnik.pozicija != Pozicija.MEHANICAR) return true;
    return false;
  }
}
