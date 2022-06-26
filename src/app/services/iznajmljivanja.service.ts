import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Iznajmljivanje } from '../models/iznajmljivanje';
import { iznajmljivanjeUprosceno } from '../models/iznajmljivanje-uprosceno';

@Injectable({
  providedIn: 'root'
})
export class IznajmljivanjaService {

  constructor(private httpClient: HttpClient) { }


  preuzmiIznajmljivanjaKorisnika(id: number) {
    return this.httpClient.get<Iznajmljivanje[]>(environment.api+"iznajmljivanje/preuzmiIznajmljivanjaKorisnikaKorisnik/"+id,{withCredentials:true})
  }

  preuzmiIznajmljivanjaKorisnikaRadnik(id:number){
    return this.httpClient.get<iznajmljivanjeUprosceno[]>(environment.api+"iznajmljivanje/preuzmiIznajmljivanjaKorisnikaRadnik/"+id,{withCredentials:true})
  }

  zavrsiIznajmljivanje(id: number) {
    return this.httpClient.put<void>(environment.api+"iznajmljivanje/Zavrsi/"+id,null,{withCredentials:true})
  }
  dodajIznajmljivanje(idv:number, ids: number, idk: number, datum: Date, dana: number) {
    let podaci = {
      sluzbenikId: ids,

       voziloId: idv,

      korisnikId: idk,

      dana:dana,

      datum: datum
    }
    return this.httpClient.post<iznajmljivanjeUprosceno>(environment.api+"iznajmljivanje/Dodaj",podaci,{withCredentials:true})
  }
}
