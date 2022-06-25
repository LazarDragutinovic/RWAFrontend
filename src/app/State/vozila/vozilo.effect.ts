import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { VozilaService } from "src/app/services/vozila.service";
import { loadVozilaPretraga, loadVozilaPretragaFail, loadVozilaPretragaSuccess, loadVozilaSva, loadVozilaSvaFail, loadVozilaSvaSucces } from "./vozila.actions";

















@Injectable()
export class VozilaEffects {
 
  

    preuzmiSvaVozila$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadVozilaSva),
      mergeMap(() =>{
          
        return this.vozilaService.preuzmiSvaVozila()
        .pipe(
          map(vozila => (loadVozilaPretragaSuccess({vozila}))),
          catchError(() => of(loadVozilaSvaFail()))
        )
      }
      )
    )
  );


  pretraziVozila$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadVozilaPretraga),
      mergeMap(({proizvodjac,grad}) =>{
          
        return this.vozilaService.pretraziVozila(proizvodjac,grad)
        .pipe(
          map(vozila => (loadVozilaPretragaSuccess({vozila}))),
          catchError(() => of(loadVozilaPretragaFail()))
        )
      }
      )
    )
  );
    
 
  constructor(
    private actions$: Actions,
    private vozilaService: VozilaService
  ) {}
}








