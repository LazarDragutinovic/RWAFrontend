import { createEntityAdapter } from "@ngrx/entity";
import { createReducer ,on} from "@ngrx/store";
import { Centar } from "src/app/models/centar";
import { loadCentriSuccess } from "./centri.action";
import { centriState } from "./centriState";




let adapter = createEntityAdapter<Centar>()
let initialState:centriState = adapter.getInitialState();


let centriReducer = createReducer(initialState, 
    on(loadCentriSuccess,(state,{centri})=>{
        return adapter.addMany(centri,state)
    }))

export default centriReducer