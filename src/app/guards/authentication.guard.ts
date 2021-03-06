import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable,debounceTime } from 'rxjs';
import { Radnik } from '../models/radnik';
import { AutentifikacijaService } from '../services/autentifikacija.service';
import { appState } from '../State/appState';
import { korisnikSelektor } from '../State/korisnik/korisnik.selector';
import { TipKorisnika } from '../State/korisnik/korisnikState';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private store : Store<appState>, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.store.select(korisnikSelektor).pipe(debounceTime(200),map(x=>{
           
      if(x.korisnik && x.tip == TipKorisnika.RADNIK) {
        if((<Radnik>x.korisnik).odobren)
          return true;
        else if(state.url !="/radnik") return this.router.createUrlTree(["/radnik"])
        else return true;
      }
      if(x.korisnik && x.tip == TipKorisnika.KORISNIK) return this.router.createUrlTree(["/"])
      return this.router.createUrlTree(["/radnik/Login"])
    }))
  }
  
}
