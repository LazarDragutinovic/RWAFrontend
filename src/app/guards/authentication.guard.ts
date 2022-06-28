import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable,debounceTime } from 'rxjs';
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

    return this.store.select(korisnikSelektor).pipe(debounceTime(500),map(x=>{
      
      console.log(state)      
      if(x.korisnik && x.tip == TipKorisnika.RADNIK) {
        return true;
      }
      if(x.korisnik && x.tip == TipKorisnika.KORISNIK) return this.router.createUrlTree(["/"])
      return this.router.createUrlTree(["/radnik/Login"])
    }))
  }
  
}
