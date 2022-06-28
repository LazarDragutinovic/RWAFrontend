import { createSelector } from "@ngrx/store";
import { Radnik } from "src/app/models/radnik";
import { appState } from "../appState";
import { TipKorisnika } from "./korisnikState";





function selectKorisnikFeature(appState:appState) {
    return appState.korisnikState
}

let korisnikSelektor = createSelector(selectKorisnikFeature,(state)=>state)

let radnikSelektor = createSelector(selectKorisnikFeature, (state)=>{
    if(state.tip == TipKorisnika.RADNIK) return <Radnik>state.korisnik
    return null})

let radnikCentarGrad = createSelector(selectKorisnikFeature,(state)=>state.centar?.grad)

let centarSelector = createSelector(selectKorisnikFeature,(state)=>{
    return state.centar
})

export {korisnikSelektor,radnikSelektor,centarSelector}