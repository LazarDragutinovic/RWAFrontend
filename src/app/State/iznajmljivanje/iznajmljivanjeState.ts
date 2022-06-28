import { EntityState } from "@ngrx/entity";
import { Iznajmljivanje } from "src/app/models/iznajmljivanje";
import { iznajmljivanjeUprosceno } from "src/app/models/iznajmljivanje-uprosceno";






export default interface iznajmljivanjeState extends EntityState<iznajmljivanjeUprosceno> {
    idKorisnika:number,
    idSelektovanogIznajmljivanja: number
}