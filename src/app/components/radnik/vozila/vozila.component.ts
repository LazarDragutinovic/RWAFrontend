import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, filter, switchMap } from 'rxjs';
import { Vozilo } from 'src/app/models/vozilo';
import { VozilaService } from 'src/app/services/vozila.service';

@Component({
  selector: 'app-vozila',
  templateUrl: './vozila.component.html',
  styleUrls: ['./vozila.component.css']
})
export class VozilaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private voziloService: VozilaService) { }

  ngOnInit(): void {
    this.pretragaForm.valueChanges.pipe(debounceTime(500),filter(x=>x.proizvodjac.length>0),switchMap(x=>this.voziloService.pretraziVozilaBezGrada(x.proizvodjac)))
                                  .subscribe(x=>{
                                    this.vozila=x;
                                    console.log(x)
                                  })
  }

  vozila: Vozilo[] = []

  izabranoVozilo: Vozilo | null= null;

  postaviVozilo(vozilo: Vozilo | null) {
    this.izabranoVozilo = vozilo;
  }

  deleteHandler(id: number) {
    let novaVozila = this.vozila.filter(v=>v.id != id);
    this.vozila = [...novaVozila]
    this.izabranoVozilo = null;
    
  }

  pretragaForm = this.formBuilder.group({
    proizvodjac: [""]
  })

}
