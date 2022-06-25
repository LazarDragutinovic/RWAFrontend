import { Vozilo } from "./vozilo";




export interface VoziloLogicko {

    id: number;

    proizvodjac: string;

    model: string;

    tip: string;


    vozila: Vozilo[] | undefined
}