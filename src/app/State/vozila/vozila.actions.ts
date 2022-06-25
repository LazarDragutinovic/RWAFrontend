import { createAction, props } from "@ngrx/store";

import { Vozilo } from "src/app/models/vozilo";






let loadVozilaSva = createAction("loadVozilaSva")

let loadVozilaSvaSucces = createAction("loadVozilaSvaSuccess", props<{vozila:Vozilo[]}>())

let loadVozilaSvaFail = createAction("loadVozilaSvaFail")


let loadVozilaPretraga= createAction("loadVozilaPretraga",props<{proizvodjac:string, grad:string}>())

let loadVozilaPretragaSuccess = createAction("loadVozilaPretragaSuccess",props<{vozila:Vozilo[]}>());

let loadVozilaPretragaFail = createAction("loadVozilaPretragaFail");


let selectVozilo = createAction("selectVozilo", props<{id:number}>())


export {loadVozilaSva,loadVozilaSvaSucces,loadVozilaSvaFail,loadVozilaPretraga,loadVozilaPretragaSuccess,loadVozilaPretragaFail,selectVozilo}
