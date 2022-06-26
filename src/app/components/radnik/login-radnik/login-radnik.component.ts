import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Radnik } from 'src/app/models/radnik';
import { appState } from 'src/app/State/appState';
import { loginRadnika, preuzmiCentarZaRadnika } from 'src/app/State/korisnik/korisnik.action';

@Component({
  selector: 'app-login-radnik',
  templateUrl: './login-radnik.component.html',
  styleUrls: ['./login-radnik.component.css']
})
export class LoginRadnikComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private store: Store<appState>,private router: Router) { }

  formLogin = this.formBuilder.group({
    email:["",[Validators.required,Validators.email]],
    lozinka:["",[Validators.required]]
  })

  ngOnInit(): void {
  }

  login(){
    if(this.formLogin.valid) {
      this.store.dispatch(loginRadnika(this.formLogin.value))
      this.store.select("korisnikState").subscribe(x=>{
        if(x.korisnik != null) {
          this.router.navigateByUrl("/radnik")
          if((<Radnik>x.korisnik).odobren && x.centar == null)
            this.store.dispatch(preuzmiCentarZaRadnika({id:x.korisnik.id}))
            this.store.select("korisnikState").subscribe(x=>{
              console.log(x.centar)
            })
        }
      })




    }
  }
}
