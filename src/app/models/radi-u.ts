import { Centar } from "./centar"
import { Radnik } from "./radnik"


export interface RadiU {

    id:number

    datumOd: Date

    datumDo: Date

    radnik: Radnik | undefined

    centar: Centar | undefined
}