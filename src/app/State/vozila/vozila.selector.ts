import { createSelector } from "@ngrx/store";
import { Vozilo } from "src/app/models/vozilo";
import { appState } from "../appState";





function selectVozilaFeature(appState:appState) {
    return appState.vozilaState
}

let voizlaSelector= createSelector(selectVozilaFeature,(state)=>{
    return state.ids.map(id=>state.entities[id]).filter(e=>e!=null).map(e=><Vozilo>e);
})


let odabranoVoziloSelector = createSelector(selectVozilaFeature,(state)=>{
    return state.entities[state.selectedVoziloId];
})

export {odabranoVoziloSelector}

export default voizlaSelector