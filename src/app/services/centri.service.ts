import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Centar } from '../models/centar';

@Injectable({
  providedIn: 'root'
})
export class CentriService {

  constructor(private httpClient: HttpClient) { }

  preuzmiCentre() {
    return this.httpClient.get<Centar[]>(environment.api+"centar/SviCentri")
  }

  preuzmiCentarRadnika(id:number) {
    return this.httpClient.get<Centar>(environment.api+"centar/CentarRadnika/"+id,{withCredentials:true})
  }
}
