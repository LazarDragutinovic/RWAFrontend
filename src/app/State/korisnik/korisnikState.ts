import { Centar } from "src/app/models/centar";
import { Korisnik } from "src/app/models/korisnik";
import { Radnik } from "src/app/models/radnik";


export enum TipKorisnika {
    KORISNIK="KORISNIK",
    RADNIK="RADNIK"
}

export interface korisnikState {
    tip: TipKorisnika,
    korisnik: Korisnik | Radnik | null
    centar:Centar | null
}