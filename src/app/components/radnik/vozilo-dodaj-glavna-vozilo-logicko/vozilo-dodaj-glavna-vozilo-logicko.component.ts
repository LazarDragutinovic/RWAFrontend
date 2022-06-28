import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VoziloLogicko } from 'src/app/models/voziloLogicko';
import { VoziloLogickoService } from 'src/app/services/vozilo-logicko.service';

@Component({
  selector: 'app-vozilo-dodaj-glavna-vozilo-logicko',
  templateUrl: './vozilo-dodaj-glavna-vozilo-logicko.component.html',
  styleUrls: ['./vozilo-dodaj-glavna-vozilo-logicko.component.css']
})
export class VoziloDodajGlavnaVoziloLogickoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private voziloLogickoService:VoziloLogickoService) { }

  logVolForm = this.formBuilder.group({
    proizvodjac:["",[Validators.required]],
    model:["",[Validators.required]],
    tip:["",Validators.required]
  })

  vozilaLogicka: VoziloLogicko[] = []

  ngOnInit(): void {
    this.voziloLogickoService.preuzmiLogVozila().subscribe(x=>{
      this.vozilaLogicka =x;
    })
  }

  obrisi(id:number){
    this.voziloLogickoService.obrisi(id).subscribe(()=>{
      let nova = this.vozilaLogicka.filter(v=>v.id != id);
      this.vozilaLogicka = [...nova]
    })
  }

  dodaj() {
    if(this.logVolForm.valid) {
      const {proizvodjac, model, tip} = this.logVolForm.value
      this.voziloLogickoService.dodajLogickoVozilo(proizvodjac,model,tip).subscribe(x=>{
        this.vozilaLogicka = [...this.vozilaLogicka,x]
      })
    }
  }

}
