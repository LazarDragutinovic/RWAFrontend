import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/State/appState';
import { loginKorisnika, loginRadnika, logoutKorisnik, logoutRadnik, validirajKorisnika } from 'src/app/State/korisnik/korisnik.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private store : Store<appState>,private router:Router) { }

  loginForm = this.formBuilder.group({
    email:[""]
    ,
    lozinka:[""]
  })

  prikaziStvari(){
    this.store.dispatch(loginKorisnika(this.loginForm.value));
    let i = 0;
    this.store.select('korisnikState').subscribe(x=>{
      if(x.korisnik!= null) this.router.navigateByUrl("/")
    })

  }

  

  ngOnInit(): void {
  }

}
