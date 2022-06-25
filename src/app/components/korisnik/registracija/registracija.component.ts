import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { Korisnik } from 'src/app/models/korisnik';
import { appState } from 'src/app/State/appState';
import { registracijaKorisnik } from 'src/app/State/korisnik/korisnik.action';
@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private store: Store<appState>) { }

  registracijaForm = this.formBuilder.group({
    ime:["",[Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]],
    prezime:["",[Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]],
    jmbg:["",[Validators.required,Validators.maxLength(13),Validators.minLength(13),Validators.pattern(/^[0-9]+(\.?[0-9]+)?$/)]],
    email:["",[Validators.email,Validators.required]],
    lozinka:["",[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]],
    ponovljenaLozinka:["",[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]],
    brojTelefona:["",[Validators.required,Validators.pattern(/^[0-9]+(\.?[0-9]+)?$/)]]
  })
  ngOnInit(): void {
  }
  errorStateMatcher = new ErrorStateMatcher();
  get ime(){ return this.registracijaForm.get("ime")}
  get prezime(){ return this.registracijaForm.get("prezime")}
  get jmbg(){ return this.registracijaForm.get("jmbg")}
  get email(){ return this.registracijaForm.get("email")}
  get lozinka(){ return this.registracijaForm.get("lozinka")}
  get ponovljenaLozinka(){ return this.registracijaForm.get("ponovljenaLozinka")}
  get brojTelefona(){return this.registracijaForm.get("brojTelefona")}

  registrujSe(){
    
    if(this.registracijaForm.valid && this.lozinka?.value == this.ponovljenaLozinka?.value) {
      let korisnik = <Korisnik>{
        ime:this.ime?.value,
        prezime:this.prezime?.value,
        jmbg:this.jmbg?.value,
        email:this.email?.value,
        lozinka:this.lozinka?.value,
        brojTelefona:this.brojTelefona?.value
      }
      this.store.dispatch(registracijaKorisnik(korisnik))
    }
    else if(!this.registracijaForm.valid) {
      alert("Unesite ispravne podatke.");
    }
    else {
      alert("Unesite iste lozinke.")
    }

  }
}
