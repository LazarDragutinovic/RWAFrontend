import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, filter, map, Observable, switchMap } from 'rxjs';
import { Korisnik } from 'src/app/models/korisnik';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.css']
})
export class KorisniciComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private korisnikService: KorisnikService) { }

  izabraniKorisnik: Korisnik | null = null

  korisnikEmail = this.formBuilder.group({
    email:[""]
  })

  korisnici: Observable<Korisnik[]> = this.korisnikEmail.valueChanges.pipe(debounceTime(500),
                                                                          map(x=>x.email),
                                                                          filter(x=>x.length>2),
                                                                          switchMap(x=>this.korisnikService.preuzmiKorisnike(x)))
  ngOnInit(): void {
    this.korisnici.subscribe(x=>console.log(x))
  }

  resetujKorisnika(){
    this.izabraniKorisnik = null;
  }

  preuzmiKorisnika(korisnik: Korisnik) {
    this.izabraniKorisnik = korisnik;
  }
}
