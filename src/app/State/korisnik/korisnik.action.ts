import { createAction, props } from "@ngrx/store";
import { Korisnik } from "src/app/models/korisnik";
import { Radnik } from "src/app/models/radnik";



let validirajKorisnika = createAction("ValidirajKorisnika")

let validirajKorisnikaSuccess = createAction("ValidirajKorisnikaSucces", props<Korisnik>())

let validirajKorisnikaFail = createAction("ValidirajKorisnikaFail");


let loginKorisnika = createAction("loginKorisnika", props<{email:string,lozinka:string}>())

let loginKorisnikaSuccess = createAction("loginKorisnikaSucces", props<Korisnik>())

let loginKorisnikaFail = createAction("loginKorisnikaFail");


let loginRadnika = createAction("loginRadnika", props<{email:string,lozinka:string}>())

let loginRadnikaSuccess = createAction("loginRadnikaSucces", props<Radnik>())

let loginRadnikaFail = createAction("loginRadnikaFail");



let validirajRadnika = createAction("ValidirajRadnika")


let validirajRadnikaSuccess = createAction("ValidirajRadnikaSuccess", props<Radnik>())

let validirajRadnikaFail = createAction("ValidirajRadnikaFail")


let logoutKorisnik = createAction("LogoutKorisnik")

let logoutKorisnikSuccess = createAction("LogoutKorisnikSuccess");

let logoutKorisnikFail = createAction("LogoutKorisnikFail")

let logoutRadnik = createAction("LogoutRadnik");

let logoutRadnikSuccess =createAction("LogoutRadnikSuccess");

let logoutRadnikFail = createAction("LogoutRadnikFail")

let registracijaKorisnik = createAction("RegistracijaKorisnik", props<Korisnik>())

let registracijaKorisnikFail = createAction("RegistracijaKorisnikFail")

export {registracijaKorisnik,registracijaKorisnikFail}

export {loginKorisnika,loginKorisnikaFail,loginKorisnikaSuccess,loginRadnika,loginRadnikaFail,loginRadnikaSuccess}
export {logoutKorisnik, logoutKorisnikSuccess,logoutKorisnikFail,logoutRadnik,logoutRadnikFail,logoutRadnikSuccess}
export {validirajKorisnika,validirajKorisnikaSuccess,validirajKorisnikaFail,validirajRadnika,validirajRadnikaFail,validirajRadnikaSuccess}