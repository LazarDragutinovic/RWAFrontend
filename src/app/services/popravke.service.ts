import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Popravka } from '../models/popravka';

@Injectable({
  providedIn: 'root'
})
export class PopravkeService {

  constructor(private httpClient: HttpClient) { }

  popravkeCentra(id:number) {
    return this.httpClient.get<Popravka[]>(environment.api+"popravka/PopravkeCentra/"+id,{withCredentials:true});
  }

  prijaviZaPopravkuVozilo(id:number) {
    return this.httpClient.post<Popravka>(environment.api+"popravka/PriajviVoziloZaPopravku/"+id,null,{withCredentials:true});
  }

  preuzmiPopravku(idm:number,idp:number) {
    return this.httpClient.post<Popravka>(environment.api+"popravka/PreuzmiPopravku/"+idm+"/"+idp,null,{withCredentials:true});
  }

  obaviPopravku(id:number,opis:string,cena:number) {
    return this.httpClient.post<Popravka>(environment.api+`popravka/ObaviPopravku/${id}/${opis}/${cena}`,null,{withCredentials:true});
  }



  
}
