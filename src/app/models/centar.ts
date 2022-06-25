import { RadiU } from "./radi-u";
import { SlikaCentra } from "./slika-centar";
import { Vozilo } from "./vozilo";





export interface Centar {

    id:number;

    naziv:string;

    adresa: string;

    grad: string

    telefon: string;


    vozila: Vozilo[] | undefined

    radnici: RadiU[] | undefined

    slika: SlikaCentra | undefined
}