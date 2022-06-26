import { createSelector } from "@ngrx/store";
import { appState } from "../appState";





function selectKorisnikFeature(appState:appState) {
    return appState.korisnikState
}

let korisnikSelektor = createSelector(selectKorisnikFeature,(state)=>state)

let radnikCentarGrad = createSelector(selectKorisnikFeature,(state)=>state.centar?.grad)

export {korisnikSelektor}