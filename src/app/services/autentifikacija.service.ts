import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,map, catchError, of} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Korisnik } from '../models/korisnik';
import { Radnik } from '../models/radnik';

@Injectable({
  providedIn: 'root'
})
export class AutentifikacijaService {

  constructor(private httpClient:HttpClient) { }

  validirajKorisnika() : Observable<Korisnik> {
    return this.httpClient.get<Korisnik>(environment.api+"auten",{withCredentials:true});
  }

  loginKorisnika(email: string, lozinka: string) : Observable<Korisnik> {
    return this.httpClient.post<Korisnik>(environment.api+"auten/log-in",{email,lozinka},{withCredentials:true}).pipe(map(x=><Korisnik>x))
  }

  logOutKorisnik() {
    return this.httpClient.post(environment.api+"auten/log-out",null,{withCredentials:true,responseType:"text"});
  }

  validirajRadnika() : Observable<Radnik> {
    return this.httpClient.get<Radnik>(environment.api+"autentifikacija-radnik/Validiraj",{withCredentials:true});
  }

  loginRadnika(email: string, lozinka: string) : Observable<Radnik> {
    return this.httpClient.post<Radnik>(environment.api+"autentifikacija-radnik/log-in",{email,lozinka},{withCredentials:true}).pipe(map(x=><Radnik>x))
  }

  logOutRadnika() {
    return this.httpClient.post(environment.api+"autentifikacija-radnik/log-out",null,{withCredentials:true,responseType:"text"});
  }


  registracijaKorisnik(korisnik:Korisnik):Observable<Korisnik>{
    return this.httpClient.post<Korisnik>(environment.api+"auten/register",korisnik,{withCredentials:true})
                .pipe(map(x=><Korisnik>x))
  } 

  registracijaRadnika(radnik: Radnik) : Observable<Radnik> {
    return this.httpClient.post<Radnik>(environment.api+"autentifikacija-radnik/register",radnik,{withCredentials:true})
  }
}
