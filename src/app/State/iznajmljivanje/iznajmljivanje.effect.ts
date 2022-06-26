import { Injectable } from "@angular/core";
import { Actions, createEffect,ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { IznajmljivanjaService } from "src/app/services/iznajmljivanja.service";
import { loadIznajmljivanjaKorisnika,loadIznajmljivanjaKorisnikaSucces,loadIznajmljivanjaKorisnikaFail } from "./iznajmljivanje.action";










@Injectable()
export class IznajmljivanjaEffects {
 
  preuzmiIznajmljivanjaKorisnika$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadIznajmljivanjaKorisnika),
      mergeMap(({id}) =>this.iznajmljivanjaService.preuzmiIznajmljivanjaKorisnika(id)
          .pipe(
              map(iznajmljivanja => (loadIznajmljivanjaKorisnikaSucces({ iznajmljivanja }))),
              catchError(() => of(loadIznajmljivanjaKorisnikaFail()))
          )
      )
    )
  );

  
    
 
  constructor(
    private actions$: Actions,
    private iznajmljivanjaService: IznajmljivanjaService
  ) {}
}










