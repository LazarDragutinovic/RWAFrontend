import { centriState } from "./centri/centriState";
import { korisnikState } from "./korisnik/korisnikState";
import vozilaState from "./vozila/vozilaState";



export interface appState {
    korisnikState: korisnikState,
    centriState:centriState,
    vozilaState:vozilaState
}