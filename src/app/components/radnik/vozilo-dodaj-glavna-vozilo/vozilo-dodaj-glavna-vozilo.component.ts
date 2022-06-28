import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { debounceTime } from 'rxjs';
import { VoziloLogicko } from 'src/app/models/voziloLogicko';
import { VozilaService } from 'src/app/services/vozila.service';
import { VoziloLogickoService } from 'src/app/services/vozilo-logicko.service';

@Component({
  selector: 'app-vozilo-dodaj-glavna-vozilo',
  templateUrl: './vozilo-dodaj-glavna-vozilo.component.html',
  styleUrls: ['./vozilo-dodaj-glavna-vozilo.component.css']
})
export class VoziloDodajGlavnaVoziloComponent implements OnInit {

  constructor(private voziloLogickoService: VoziloLogickoService,
              private formBuilder: FormBuilder, 
              private domSanitazer: DomSanitizer,
              private voziloService: VozilaService) { }

  slikaUrl: SafeUrl | null = null; 

  ngOnInit(): void {
    this.voziloLogickoService.preuzmiLogVozila()
                             .subscribe(x=>this.vozilaLogicka=x)
    this.forma.valueChanges.pipe(debounceTime(500)).subscribe(x=>{
      this.slikaUrl = this.domSanitazer.bypassSecurityTrustResourceUrl(x.slika)
    })
  }

  forma = this.formBuilder.group({
    idLogickogVozila:["",[Validators.required]],
    godiste: ["",[Validators.required,Validators.pattern(/^[0-9]+(\.?[0-9]+)?$/)]],
    cenaPoDanu : ["",[Validators.required,Validators.pattern(/^[0-9]+(\.?[0-9]+)?$/)]],
    registracionaOznaka:["",Validators.required]
    ,
    slika:["",Validators.required]
  })

  dodajVozilo(){
    if(this.forma.valid) {
      console.log(this.forma.value)
      if(this.forma.value.idLogickogVozila < 0) return 
      let podaci = {
        godiste: this.forma.value.godiste,
        cenaPoDanu: this.forma.value.cenaPoDanu,
        idLogickogVozila: this.forma.value.idLogickogVozila,
        registracionaOznaka: this.forma.value. registracionaOznaka
        ,
        slike:[{url:this.forma.value.slika}]  
      }
      this.voziloService.dodaj(podaci).subscribe(x=>{
        alert("Uspesno je dodato vozilo.")
        this.reset();
      })
    }
  }

  reset(){
    this.forma.reset()
  }

  vozilaLogicka: VoziloLogicko[] = []
}
