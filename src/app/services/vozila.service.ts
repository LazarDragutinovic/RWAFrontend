import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Vozilo } from '../models/vozilo';
import {map} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class VozilaService {

  constructor(private httpClient: HttpClient) { }

  preuzmiSvaVozila() {
    return this.httpClient.get<Vozilo[]>(environment.api+"vozilo/SvaVozila")
  }

  pretraziVozila(proizvodjac:string,grad:string) {
    return this.httpClient.get<Vozilo[]>(environment.api+`vozilo/Pretraga/${proizvodjac}/${grad}`)
  }

  pretraziVozilaBezGrada(proizvodjac:string) {
    return this.httpClient.get<Vozilo[]>(environment.api+`vozilo/PretragaBezGrada/${proizvodjac}`,{withCredentials:true})
  }


  pretraziSlobodnaVozila(proizvodjac:string,grad:string) {
    return this.httpClient.get<Vozilo[]>(environment.api+`vozilo/PretragaSlobodna/${proizvodjac}/${grad}`,{withCredentials:true})
  }
  voziloLajkovi(id:number) {
    return this.httpClient.get<number>(environment.api+`like/LikoviVozila/${id}`)
  }

  preuzmiLike(idk: number, idv: number){
    return this.httpClient.get<number>(environment.api+`like/likeKorisnika/${idk}/${idv}`,{withCredentials:true})
  }
  
  lajkuj(idk: number, idv: number){
    return this.httpClient.post<number>(environment.api+"like/DodajLike/"+idv+"/"+idk,null,{withCredentials:true}).pipe(map(x=><number>x))
  }

  dislike(id: number) {
    return this.httpClient.delete(environment.api+"like/obrisi/"+id,{withCredentials:true})
  }

  dodaj(podaci:any){
    return this.httpClient.post<any>(environment.api+"vozilo/Dodaj",podaci,{withCredentials:true});
  }

  obrisi(id:number) {
    return this.httpClient.delete(environment.api+"vozilo/Obrisi/"+id,{withCredentials:true,responseType:"text"})
  }
}
