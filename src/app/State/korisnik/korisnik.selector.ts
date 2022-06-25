import { createSelector } from "@ngrx/store";
import { appState } from "../appState";





function selectKorisnikFeature(appState:appState) {
    return appState.korisnikState
}

let korisnikSelektor = createSelector(selectKorisnikFeature,(state)=>state)

export {korisnikSelektor}