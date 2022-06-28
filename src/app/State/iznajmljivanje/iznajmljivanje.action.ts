import { createAction,props } from "@ngrx/store";
import { Iznajmljivanje } from "src/app/models/iznajmljivanje";
import { iznajmljivanjeUprosceno } from "src/app/models/iznajmljivanje-uprosceno";





let loadIznajmljivanjaKorisnika = createAction("loadIznajmljivanjaKorisnika",props<{id:number}>())


let loadIznajmljivanjaKorisnikaSucces = createAction("loadIznajmljivanjaKorisnikaSucces",props<{iznajmljivanja: iznajmljivanjeUprosceno[]}>())

let loadIznajmljivanjaKorisnikaFail = createAction("loadIznajmljivanjaKorisnikaFail")


export {loadIznajmljivanjaKorisnika, loadIznajmljivanjaKorisnikaSucces, loadIznajmljivanjaKorisnikaFail}