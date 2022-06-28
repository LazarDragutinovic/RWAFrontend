import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VoziloLogicko } from '../models/voziloLogicko';

@Injectable({
  providedIn: 'root'
})
export class VoziloLogickoService {

  constructor(private httpClient:HttpClient) { }

  preuzmiLogVozila() {
    return this.httpClient.get<VoziloLogicko[]>(environment.api+"vozilo-logicko",{withCredentials:true})
  }
  dodajLogickoVozilo(proizvodjac:string, model:string,tip:string) {
    let vozilo = {
      proizvodjac,
      model,
      tip
    }
    return this.httpClient.post<VoziloLogicko>(environment.api+"vozilo-logicko/Dodaj",vozilo,{withCredentials:true});
  }

  obrisi(id: number) {
    return this.httpClient.delete(environment.api+"vozilo-logicko/Izbrisi/"+id,{withCredentials:true,responseType:"text"})
  }
}
