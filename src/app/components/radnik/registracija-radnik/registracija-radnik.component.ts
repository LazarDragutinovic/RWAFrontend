import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/State/appState';
import { registracijaRadnik } from 'src/app/State/korisnik/korisnik.action';

@Component({
  selector: 'app-registracija-radnik',
  templateUrl: './registracija-radnik.component.html',
  styleUrls: ['./registracija-radnik.component.css']
})
export class RegistracijaRadnikComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private store: Store<appState>, private router: Router) { }

  formReg = this.formBuilder.group({
    ime:["",[Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]],
    prezime:["",[Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]],
    email:["",[Validators.required,Validators.email]],
    lozinka: ["",[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]],
    lozinkaPonovljena: ["",[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]]
  }) 

  ngOnInit(): void {
  }

  register(){
    if(this.formReg.valid && this.formReg.value.lozinka == this.formReg.value.lozinkaPonovljena) {
      this.store.dispatch(registracijaRadnik(this.formReg.value))
      this.store.select("korisnikState").subscribe(x=>{
        if(x.korisnik != null) this.router.navigateByUrl("/radnik")
      })
    }
    else if (this.formReg.value.lozinka != this.formReg.value.lozinkaPonovljena) {
      alert("Niset uneli iste lozinke")
    }
  }
}
