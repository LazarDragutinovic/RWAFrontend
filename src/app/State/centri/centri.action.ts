import { createAction ,props} from "@ngrx/store";
import { Centar } from "src/app/models/centar";






let loadCentri = createAction("loadCentri");

let loadCentriSuccess = createAction("loadCentriSuccess",props<{centri:Centar[]}>())

let loadCentriFail = createAction("loadCentriFail")

export {loadCentri,loadCentriFail,loadCentriSuccess}