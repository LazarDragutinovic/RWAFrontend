import { Korisnik } from "./korisnik";
import { Radnik } from "./radnik";
import { Vozilo } from "./vozilo";



export interface Iznajmljivanje {

    id: number;

    datum: Date

    zavrseno:boolean

    dana:number

    sluzbenik: Radnik | undefined;

    korisnik: Korisnik | undefined;

    vozilo: Vozilo | undefined
    
}