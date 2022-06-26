import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Korisnik } from '../models/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private httpClient: HttpClient) { }


  preuzmiKorisnike(email:string) {
    return this.httpClient.get<Korisnik[]>(environment.api+"korisnik/PretraziKorisnike/"+email,{withCredentials:true})
  }
}
