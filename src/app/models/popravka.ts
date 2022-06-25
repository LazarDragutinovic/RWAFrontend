import { Radnik } from "./radnik";
import { Vozilo } from "./vozilo";




export interface Popravka {

    id: number;
    cena: number;
    opis: string;
    obavljena: boolean
    vozilo: Vozilo | undefined
    mehanicar: Radnik | undefined
}