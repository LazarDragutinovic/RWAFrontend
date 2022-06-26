import { createAction,props } from "@ngrx/store";
import { Iznajmljivanje } from "src/app/models/iznajmljivanje";





let loadIznajmljivanjaKorisnika = createAction("loadIznajmljivanjaKorisnika",props<{id:number}>())


let loadIznajmljivanjaKorisnikaSucces = createAction("loadIznajmljivanjaKorisnikaSucces",props<{iznajmljivanja: Iznajmljivanje[]}>())

let loadIznajmljivanjaKorisnikaFail = createAction("loadIznajmljivanjaKorisnikaFail")


export {loadIznajmljivanjaKorisnika, loadIznajmljivanjaKorisnikaSucces, loadIznajmljivanjaKorisnikaFail}