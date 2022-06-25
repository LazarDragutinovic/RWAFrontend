import { Korisnik } from "./korisnik";
import { Vozilo } from "./vozilo";




export interface Like {

    id:number;

    vozilo:Vozilo | undefined

    korisnik:Korisnik | undefined
}