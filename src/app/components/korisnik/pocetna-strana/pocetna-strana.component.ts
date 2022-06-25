import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime, Observable, of } from 'rxjs';
import { Vozilo } from 'src/app/models/vozilo';
import { appState } from 'src/app/State/appState';
import { loadVozilaPretraga, loadVozilaSva, selectVozilo } from 'src/app/State/vozila/vozila.actions';
import voizlaSelector from 'src/app/State/vozila/vozila.selector';

@Component({
  selector: 'app-pocetna-strana',
  templateUrl: './pocetna-strana.component.html',
  styleUrls: ['./pocetna-strana.component.css']
})
export class PocetnaStranaComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private store: Store<appState>, private router: Router) { }

  formInputiZaPretragu = this.formBuilder.group({
    proizvodjac:[""],
    grad:[""]
  })

  vozila: Observable<Vozilo[]>=of([]);
  ngOnInit(): void {
    this.formInputiZaPretragu.valueChanges
        .pipe(debounceTime(500))
        .subscribe((x)=>{
        if(x.proizvodjac == "" || x.grad == "") this.store.dispatch(loadVozilaSva())
        else this.store.dispatch(loadVozilaPretraga({proizvodjac:x.proizvodjac,grad:x.grad}))})
    this.vozila = this.store.select(voizlaSelector);
    
    this.vozila.subscribe(x=>console.log(x))
    this.store.dispatch(loadVozilaSva())


  }

  izaberiVozilo(voziloId: number) {
    this.store.dispatch(selectVozilo({id:voziloId}))
    this.router.navigateByUrl("/Detaljno")
  }

}
