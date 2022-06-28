import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { CentriService } from "src/app/services/centri.service";
import { loadCentarKorisnika, loadCentarKorisnikaSuccess, loadCentri , loadCentriFail, loadCentriSuccess} from "./centri.action";



@Injectable()
export class CentarEffects {
 
  preuzmiCentre$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCentri),
      mergeMap(() =>{
          
        return this.centriService.preuzmiCentre()
        .pipe(
          map(centri => (loadCentriSuccess({centri}))),
          catchError(() => of(loadCentriFail()))
        )
      }
      )
    )
  );


  preuzmiCentarKorisnika$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCentarKorisnika),
      mergeMap(({id}) =>{
          
        return this.centriService.preuzmiCentarRadnika(id)
        .pipe(
          map(centar => (loadCentarKorisnikaSuccess(centar))),
          catchError(() => of(loadCentriFail()))
        )
      }
      )
    )
  );
    
 
  constructor(
    private actions$: Actions,
    private centriService: CentriService
  ) {}
}