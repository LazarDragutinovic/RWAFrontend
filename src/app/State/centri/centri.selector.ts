import { createSelector } from "@ngrx/store";
import { Centar } from "src/app/models/centar";
import { appState } from "../appState";
import { centriState } from "./centriState";




let selectCentiFeature = function(state:appState) {
    return state.centriState
}

let selectCentri = function(state:centriState) {
    return state.ids.map(id=>state.entities[id]).filter(c=>c!=null).map(c=><Centar>c)
}

let centriSelector = createSelector(selectCentiFeature,selectCentri)

export {centriSelector}