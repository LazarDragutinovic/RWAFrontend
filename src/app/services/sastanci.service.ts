import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Radnik } from '../models/radnik';
import { Sastanak } from '../models/sastanak';

@Injectable({
  providedIn: 'root'
})
export class SastanciService {

  constructor(private httpClient: HttpClient) { }


  mojiSastanci(id: number) {
    return this.httpClient.get<Sastanak[]>(environment.api+"sastanak/MojiSastanci/"+id,{withCredentials:true});
  }

  preuzmiSveSastankeUpravnika(id: number) {
    return this.httpClient.get<Sastanak[]>(environment.api+"sastanak/SviSastanciUpravnika/"+id,{withCredentials:true});
  }

  sviPozvaniNaSastanak(id: number) {
    return this.httpClient.get<Radnik[]>(environment.api+"sastanak/SviPozvaniNaSastanak/"+id,{withCredentials:true})
  }

  kreirajSastanak(idr:number,tema:string,mesto:string,vreme:Date) {
    return this.httpClient.post<Sastanak>(environment.api+`sastanak/KreirajSastanaj/${idr}/${tema}/${mesto}/${vreme}`,null,{withCredentials:true});
  }

  oksastanak(ids:number){
    return this.httpClient.put(environment.api+"sastanak/Ok/"+ids,null,{withCredentials:true,responseType:"text"})
  }

  odlozensastanak(ids:number) {
    return this.httpClient.put(environment.api+"sastanak/Odlozen/"+ids,null,{withCredentials:true,responseType:"text"})
  
  }

  otkazansastanak(ids:number) {
    return this.httpClient.put(environment.api+"sastanak/Otkazi/"+ids,null,{withCredentials:true,responseType:"text"})
  
  }

  pozoviRadnika(idr: number, ids: number){
    return this.httpClient.post(environment.api+`sastanak/PoziviRadnika/${idr}/${ids}`,null,{withCredentials:true,responseType:"text"});
  }

  opozoviRadnika(idr: number, ids: number) {
    return this.httpClient.delete(environment.api+`sastanak/OpozoviRadnika/${idr}/${ids}`,{withCredentials:true,responseType:"text"});
    
  }
}
