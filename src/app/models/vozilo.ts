


import { Centar } from "./centar";
import { Iznajmljivanje } from "./iznajmljivanje";
import { Like } from "./like";
import { Popravka } from "./popravka";
import { SlikaAutomobila } from "./slika-Automobila";
import { VoziloLogicko } from "./voziloLogicko";




export interface Vozilo {

    id: number;

    godiste: number;

    cenaPoDanu: number

    voziloLogicko: VoziloLogicko | undefined

    popravke: Popravka[] | undefined

    likes: Like[] | undefined

    centar: Centar | undefined;

    slike: SlikaAutomobila[] | undefined

    iznajmljivanja: Iznajmljivanje[] | undefined
}


