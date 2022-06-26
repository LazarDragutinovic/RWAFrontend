import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AutentifikacijaService } from 'src/app/services/autentifikacija.service';
import { CentriService } from 'src/app/services/centri.service';
import { validirajKorisnika, validirajKorisnikaFail, validirajKorisnikaSuccess, loginKorisnika,loginKorisnikaSuccess, loginKorisnikaFail, validirajRadnika, validirajRadnikaSuccess, validirajRadnikaFail, loginRadnika, loginRadnikaSuccess, loginRadnikaFail, logoutKorisnikSuccess, logoutKorisnikFail, logoutRadnik, logoutRadnikSuccess, registracijaKorisnik, registracijaKorisnikFail, registracijaRadnik, registracijaRadnikFail, preuzmiCentarZaRadnika, preuzmiCentarZaRadnikaSuccse, preuzmiCentarZaRadnikaFail } from './korisnik.action';
import { logoutKorisnik,logoutRadnikFail } from './korisnik.action';
 
@Injectable()
export class KorisnikEffects {
 
  validirajKorisnika$ = createEffect(() =>
    this.actions$.pipe(
      ofType(validirajKorisnika),
      mergeMap(() => this.autenService.validirajKorisnika()
        .pipe(
          map(korisnik => (validirajKorisnikaSuccess(korisnik))),
          catchError(() => of(validirajKorisnikaFail()))
        )
      )
    )
  );

  loginKorisnika$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginKorisnika),
      mergeMap(({email,lozinka}) => this.autenService.loginKorisnika(email,lozinka)
        .pipe(
          map(korisnik => (loginKorisnikaSuccess(korisnik))),
          catchError(() => of(loginKorisnikaFail()))
        )
      )
    )
  );

  
  logoutRadnika$ = createEffect(() =>
  this.actions$.pipe(
    ofType(logoutRadnik),
    mergeMap(() =>{
      return this.autenService.logOutRadnika()
      .pipe(
        map(() => {
          console.log("Ovde")
          return (logoutRadnikSuccess())}),
        catchError(() => of(logoutRadnikFail()))
      )
    }
    )
    
  )
);

logoutKorisnika$ = createEffect(() =>
  this.actions$.pipe(
    ofType(logoutKorisnik),
    mergeMap(() => this.autenService.logOutKorisnik()
      .pipe(
        map(() => {
          
          return (logoutKorisnikSuccess())}),
        catchError((x) => {
          console.log(x)
          return of(logoutKorisnikFail())})
      )
    )
  )
);

  validirajRadnika$ = createEffect(() =>
    this.actions$.pipe(
      ofType(validirajRadnika),
      mergeMap(() => this.autenService.validirajRadnika()
        .pipe(
          map(radnik => (validirajRadnikaSuccess(radnik))),
          catchError(() => of(validirajRadnikaFail()))
        )
      )
    )
  );

  loginRadnika$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginRadnika),
      mergeMap(({email,lozinka}) => this.autenService.loginRadnika(email,lozinka)
        .pipe(
          map(radnik => (loginRadnikaSuccess(radnik))),
          catchError(() => of(loginRadnikaFail()))
        )
      )
    )
  );

  registrujKorisnika$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registracijaKorisnik),
      mergeMap((korisnik) => { 
        let lozinka = korisnik.lozinka;
        let email = korisnik.email
        return this.autenService.registracijaKorisnik(korisnik)
        .pipe(
          map(korisnik => (loginKorisnika({email,lozinka}))),
          catchError((x) => {
            alert(x.error.message)
            return of(registracijaKorisnikFail())})
        )
        }
      )
        
    )
  );

  registrujRadnika$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registracijaRadnik),
      mergeMap((korisnik) => { 
        let lozinka = korisnik.lozinka;
        let email = korisnik.email
        return this.autenService.registracijaRadnika(korisnik)
        .pipe(
          map(korisnik => (loginRadnika({email,lozinka}))),
          catchError((x) => {
            alert(x.error.message)
            return of(registracijaRadnikFail())})
        )
        }
      )
        
    )
  );

  preuzmiCentar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(preuzmiCentarZaRadnika),
      mergeMap(({id}) => { 
        return this.centarService.preuzmiCentarRadnika(id)
        .pipe(
          map(centar => (preuzmiCentarZaRadnikaSuccse(centar))),
          catchError((x) => {
            alert(x.error.message)
            return of(preuzmiCentarZaRadnikaFail())})
        )
        }
      )
        
    )
  );
 
  constructor(
    private actions$: Actions,
    private autenService: AutentifikacijaService,
    private centarService:CentriService
    ) {}
}