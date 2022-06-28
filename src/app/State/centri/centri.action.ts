import { createAction ,props} from "@ngrx/store";
import { Centar } from "src/app/models/centar";






let loadCentri = createAction("loadCentri");

let loadCentriSuccess = createAction("loadCentriSuccess",props<{centri:Centar[]}>())

let loadCentriFail = createAction("loadCentriFail")

let loadCentarKorisnika = createAction("loadCentarKorisnika",props<{id:number}>())

let loadCentarKorisnikaSuccess = createAction("loadCentarKorisnikaSuccess",props<Centar>())

let loadCentarKorisnikaFail = createAction("loadCentarKorisnikaFail")

export {loadCentri,loadCentriFail,loadCentriSuccess,loadCentarKorisnika,loadCentarKorisnikaSuccess,loadCentarKorisnikaFail}