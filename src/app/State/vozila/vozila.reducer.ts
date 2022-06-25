import { createEntityAdapter } from "@ngrx/entity";
import { createReducer , on} from "@ngrx/store";
import { Vozilo } from "src/app/models/vozilo";
import { loadVozilaPretragaSuccess, loadVozilaSvaSucces, selectVozilo } from "./vozila.actions";
import vozilaState from "./vozilaState";





let adapter = createEntityAdapter<Vozilo>()

let initialState: vozilaState = {...adapter.getInitialState(),selectedVoziloId:-1}

let vozilaReducer = createReducer<vozilaState>(initialState,
        on(loadVozilaSvaSucces,(state,{vozila})=>{
            console.log(vozila)
            return adapter.setAll(vozila,state);
        }),
        on(loadVozilaPretragaSuccess,(state,{vozila})=>{
            return adapter.setAll(vozila,state);
        }),
        on(selectVozilo,(state,{id})=>{
            let newState = <vozilaState>{...state}
            newState.selectedVoziloId = id;
            return newState
        })
    )


export default vozilaReducer;