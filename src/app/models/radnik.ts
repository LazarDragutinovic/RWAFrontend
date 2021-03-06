import { Popravka } from "./popravka"
import { RadiU } from "./radi-u"
import { Sastanak } from "./sastanak"
import { Iznajmljivanje } from "./iznajmljivanje"
import { Centar } from "./centar"
enum Pozicija {
    UPRAVNIK="UPRAVNIK",
    SLUZBENIK="SLUZBENIK",
    MEHANICAR="MEHANICAR"
}

export {Pozicija}

export interface Radnik {


    id: number

    ime: string

    prezime: string

    email: string

    lozinka:string

    pozicija: Pozicija

    odobren: boolean

    popravke: Popravka[] | undefined

    centar: Centar | undefined

    poslovi: RadiU[] | undefined

    sastanci: Sastanak[] | undefined

    zakazaoSastanke: Sastanak[] | undefined

    iznajmljivanja: Iznajmljivanje[] | undefined
}