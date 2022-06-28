import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, filter, map, Observable, of, switchMap } from 'rxjs';
import { Pozicija, Radnik } from 'src/app/models/radnik';
import { RadnikService } from 'src/app/services/radnik.service';

@Component({
  selector: 'app-radnici',
  templateUrl: './radnici.component.html',
  styleUrls: ['./radnici.component.css']
})
export class RadniciComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private radnikService: RadnikService) { }

  izabraniRadnik: Radnik | null = null;

  preuzmiRadnika(radnik: Radnik | null) {
    this.izabraniRadnik = radnik
  }

  ukloniRadnika() {
    this.izabraniRadnik = null
  }

  radnikForm = this.formBuilder.group({
    email:[""]
  })

  ngOnInit(): void {
    this.radnici = this.radnikForm.valueChanges.pipe(debounceTime(500),
                                                map(x=>x.email),
                                                filter(x=>x.length>2),
                                                switchMap(x=>this.radnikService.pretraziRednike(x)),
                                                map(x=>x.filter(radnik=>radnik.pozicija != Pozicija.UPRAVNIK))                                             
                                                )
  }

  radnici: Observable<Radnik[]> = of([])
}
