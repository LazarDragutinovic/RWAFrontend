import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Pozicija, Radnik } from '../models/radnik';
import { Centar } from '../models/centar';
@Injectable({
  providedIn: 'root'
})
export class RadnikService {

  constructor(private httpClient: HttpClient) { }


  pretraziRednike(email: string) {
    return this.httpClient.get<Radnik[]>(environment.api+"radnik/pretrazi/"+email,{withCredentials:true})
  }
  odobriNalog(id: number){
    return this.httpClient.put(environment.api+"odobri-rasporedi/OdobriNalog/"+id,null,{withCredentials:true,responseType:"text"})
  }

  zabraniNalog(id: number) {
    return this.httpClient.put(environment.api+"odobri-rasporedi/ZabraniNalog/"+id,null,{withCredentials:true,responseType:"text"})
  }

  rasporediRadnika(idr:number, idc: number) {
    return this.httpClient.put<Centar>(environment.api+`odobri-rasporedi/Rasporedi/${idr}/${idc}`,null,{withCredentials:true})
  }

  postaviPoziciju(id: number, pozicija: Pozicija){
    return this.httpClient.put(environment.api+`radnik/PromeniPoziciju/${id}/${pozicija}`,null,{withCredentials:true,responseType:"text"})
  }
}
