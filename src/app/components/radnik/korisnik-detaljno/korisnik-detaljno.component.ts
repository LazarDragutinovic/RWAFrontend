import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { of, Observable, switchMap,mergeMap, debounceTime, catchError, filter } from 'rxjs';
import { Iznajmljivanje } from 'src/app/models/iznajmljivanje';
import { iznajmljivanjeUprosceno } from 'src/app/models/iznajmljivanje-uprosceno';
import { Korisnik } from 'src/app/models/korisnik';
import { Vozilo } from 'src/app/models/vozilo';
import { IznajmljivanjaService } from 'src/app/services/iznajmljivanja.service';
import { VozilaService } from 'src/app/services/vozila.service';
import { appState } from 'src/app/State/appState';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-korisnik-detaljno',
  templateUrl: './korisnik-detaljno.component.html',
  styleUrls: ['./korisnik-detaljno.component.css']
})
export class KorisnikDetaljnoComponent implements OnInit {

  constructor(private iznajmljivanjeServise: IznajmljivanjaService , private formBuilder: FormBuilder,
    private voziloService: VozilaService,
    private store: Store<appState>) { }

  iznajmljivanjaKorisnika: iznajmljivanjeUprosceno[] = [];


  formPretragaVozila = this.formBuilder.group({
    proizvodjac:[""],
    grad:[""]
  })

  iznajmlivanjeForm = this.formBuilder.group({
    idVozila:["",[Validators.required]],
    datum:["",Validators.required],
    dana:["",Validators.required]
  })

  vozila: Vozilo[] = []

  izabranoVoziloId : number = -1;

  ngOnInit(): void {
    if(this.korisnik)
      this.iznajmljivanjeServise.preuzmiIznajmljivanjaKorisnikaRadnik(this.korisnik.id).subscribe(x=>{              
                                            this.iznajmljivanjaKorisnika=x
                                                              })
    
    this.formPretragaVozila.valueChanges
                        .pipe(debounceTime(500),      
                              filter(x=>x.proizvodjac != "" && x.grad != "")
                        )
                        .subscribe(x=>{
                          this.voziloService.pretraziSlobodnaVozila(x.proizvodjac,x.grad).subscribe(x=>{
                            this.vozila = x
                          })
                
                        })
  
  }

  

  @Input() korisnik: Korisnik | null = null

  @Output() Emiter: EventEmitter<null> = new EventEmitter()
  
  vratiSe(){
    this.Emiter.emit(null);
  }

  dodavanje: boolean = false;

  dodavanjeToggle(val:boolean) {
    this.dodavanje= val;
  } 

  dodajIznajmljivanje() {
    if(this.iznajmlivanjeForm.valid) {
      let podaci = this.iznajmlivanjeForm.value;
      this.store.select("korisnikState").subscribe(x=>{

        if(podaci.idVozila <= 0) {
          alert("Izaberite vozilo.")
          return
        }

        if(this.korisnik !=null && x.korisnik != null)
          
          this.iznajmljivanjeServise.dodajIznajmljivanje(podaci.idVozila,x.korisnik.id,this.korisnik.id,podaci.datum,podaci.dana)
          .subscribe(x=>{
            this.iznajmljivanjaKorisnika = [...this.iznajmljivanjaKorisnika,x]
          })
        
        this.dodavanje = false;
      })
      
    }
  }
}
