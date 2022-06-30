import { createReducer ,on} from "@ngrx/store"
import { Radnik } from "src/app/models/radnik";
import { loginKorisnikaSuccess, loginRadnikaSuccess, logoutKorisnikSuccess, logoutRadnikSuccess, preuzmiCentarZaRadnika, preuzmiCentarZaRadnikaSuccse, validirajKorisnika, validirajKorisnikaSuccess, validirajRadnika, validirajRadnikaSuccess } from "./korisnik.action";
import { korisnikState, TipKorisnika } from "./korisnikState";



let initialState: korisnikState = {
    tip: TipKorisnika.KORISNIK,
    korisnik: null,
    centar: null
}


let korisnikReducer = createReducer(initialState,

    on(validirajKorisnikaSuccess,(state,Korisnik)=>{
        let newState = {...state}
        newState.korisnik = Korisnik
        newState.tip = TipKorisnika.KORISNIK
        return newState
    }),
    on(loginKorisnikaSuccess,(state,Korisnik)=>{
        let newState = {...state}
        newState.korisnik = Korisnik
        newState.tip = TipKorisnika.KORISNIK
        return newState
    }),
    on(validirajRadnikaSuccess,(state,Radnik)=>{
        let newState={...state};
        newState.korisnik=Radnik;
        newState.tip = TipKorisnika.RADNIK;
        return newState
    }),
    on(loginRadnikaSuccess,(state,Radnik)=>{
        let newState={...state};
        newState.korisnik=Radnik;
        newState.tip = TipKorisnika.RADNIK;
        return newState
    }),
    on(logoutKorisnikSuccess,(state)=>{
        let newState = {...state}
        newState.korisnik = null;
        newState.tip = TipKorisnika.KORISNIK
        console.log(newState)
        return newState
    }),
    on(logoutRadnikSuccess,(state)=>{
        let newState = {...state}
        newState.korisnik = null;
        newState.tip = TipKorisnika.KORISNIK
        return newState
    }),
    on(preuzmiCentarZaRadnikaSuccse,(state,centar)=>{
        let newState ={...state}
        newState.centar = centar
        return newState
    })
    );

export default korisnikReducer;  