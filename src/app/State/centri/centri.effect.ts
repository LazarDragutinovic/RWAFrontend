import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { CentriService } from "src/app/services/centri.service";
import { loadCentri , loadCentriFail, loadCentriSuccess} from "./centri.action";



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

    
 
  constructor(
    private actions$: Actions,
    private centriService: CentriService
  ) {}
}