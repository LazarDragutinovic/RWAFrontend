import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Centar } from 'src/app/models/centar';
import { Vozilo } from 'src/app/models/vozilo';
import { CentriService } from 'src/app/services/centri.service';
import { VozilaService } from 'src/app/services/vozila.service';
import { appState } from 'src/app/State/appState';
import { loadCentri } from 'src/app/State/centri/centri.action';
import { centriSelector } from 'src/app/State/centri/centri.selector';

@Component({
  selector: 'app-vozilo-detaljno',
  templateUrl: './vozilo-detaljno.component.html',
  styleUrls: ['./vozilo-detaljno.component.css']
})
export class VoziloDetaljnoComponent implements OnInit {

  constructor(private store: Store<appState>, private centarService: CentriService,private voziloService: VozilaService) { }

  ngOnInit(): void {
    
    this.store.select(centriSelector).subscribe(x=>{
      if(x.length ==0) this.store.dispatch(loadCentri())
      this.centri = x;
    })
  }

  centri: Centar[] = []

  @Input() vozilo: Vozilo | null = null;
  @Output() Emiter: EventEmitter<null> = new EventEmitter();
  @Output() EmiterObrisi: EventEmitter<number> = new EventEmitter();

  nazad() {
    this.Emiter.emit(null)

  }

  obrisiVozilo(){
    if(this.vozilo)
      this.voziloService.obrisi(this.vozilo.id).subscribe(x=>{
        alert("Uspesno obrisano vozilo.")
        if(this.vozilo)
          this.EmiterObrisi.emit(this.vozilo.id)
      })
  }

  postaviCentar(centar: Centar) {
    if(this.vozilo)
    this.centarService.postaviCentarVozila(centar.id,this.vozilo.id).subscribe(x=>{
      if(this.vozilo)this.vozilo.centar = centar
    })
  }
}
