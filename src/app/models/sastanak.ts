
import { Radnik } from "./radnik";

enum Status {
    
    OK="OK",
    OTKAZAN = "OTKAZAN",
    ODLOZEN = "ODLOZEN"

}

export {Status}

export interface Sastanak {

    id: number

    tema: string

    mesto: string

    vreme: Date;

    status: Status

    zakazao: Radnik | undefined;

    pozvani: Radnik[] | undefined
}