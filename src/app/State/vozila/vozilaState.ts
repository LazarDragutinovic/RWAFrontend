import { EntityState } from "@ngrx/entity";
import { Vozilo } from "src/app/models/vozilo";







export default interface vozilaState extends EntityState<Vozilo> {
    selectedVoziloId: number
}