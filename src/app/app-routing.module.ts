import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentriComponent } from './components/korisnik/centri/centri.component';
import { DetaljnoAutomobilComponent } from './components/korisnik/detaljno-automobil/detaljno-automobil.component';
import { GlavnaComponent } from './components/korisnik/glavna/glavna.component';
import { LoginComponent } from './components/korisnik/login/login.component';
import { PocetnaStranaComponent } from './components/korisnik/pocetna-strana/pocetna-strana.component';
import { ProfilComponent } from './components/korisnik/profil/profil.component';
import { RegistracijaComponent } from './components/korisnik/registracija/registracija.component';
import { GlavnaRadnikComponent } from './components/radnik/glavna-radnik/glavna-radnik.component';
import { KorisniciComponent } from './components/radnik/korisnici/korisnici.component';
import { KorisnikDetaljnoComponent } from './components/radnik/korisnik-detaljno/korisnik-detaljno.component';
import { LoginRadnikComponent } from './components/radnik/login-radnik/login-radnik.component';
import { PocetnaRadnikComponent } from './components/radnik/pocetna-radnik/pocetna-radnik.component';
import { PopravkaDetaljnoComponent } from './components/radnik/popravka-detaljno/popravka-detaljno.component';
import { PopravkeComponent } from './components/radnik/popravke/popravke.component';
import { RadniciComponent } from './components/radnik/radnici/radnici.component';
import { RadnikDetaljnoComponent } from './components/radnik/radnik-detaljno/radnik-detaljno.component';
import { RegistracijaRadnikComponent } from './components/radnik/registracija-radnik/registracija-radnik.component';
import { SastanakComponent } from './components/radnik/sastanak/sastanak.component';
import { VozilaComponent } from './components/radnik/vozila/vozila.component';
import { VoziloDodajGlavnaVoziloLogickoComponent } from './components/radnik/vozilo-dodaj-glavna-vozilo-logicko/vozilo-dodaj-glavna-vozilo-logicko.component';
import { VoziloDodajGlavnaVoziloComponent } from './components/radnik/vozilo-dodaj-glavna-vozilo/vozilo-dodaj-glavna-vozilo.component';
import { VoziloDodajGlavnaComponent } from './components/radnik/vozilo-dodaj-glavna/vozilo-dodaj-glavna.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {
    path:"",
    component:GlavnaComponent,
    children: [
      {path:"Login", component:LoginComponent},
      {path:"Registracija",component:RegistracijaComponent},
      {path: "",component:PocetnaStranaComponent},
      {path:"Detaljno",component:DetaljnoAutomobilComponent},
      {path:"Centri",component:CentriComponent},
      {path:"Profil",component:ProfilComponent}
    ]
  },
  {
    path:"radnik",
    component:GlavnaRadnikComponent,
    children: [
      {path:"",component:PocetnaRadnikComponent,canActivate:[AuthenticationGuard]},
      {path:"Login",component:LoginRadnikComponent}
      ,
      {path:"Registracija",component:RegistracijaRadnikComponent},
      {path:"Sastanak",component:SastanakComponent,canActivate:[AuthenticationGuard]},
      {path:"Radnici",component:RadniciComponent,canActivate:[AuthenticationGuard]},
      {path:"RadnikDetaljno",component:RadnikDetaljnoComponent,canActivate:[AuthenticationGuard]},
      {path:"Korisnici",component:KorisniciComponent,canActivate:[AuthenticationGuard]},
      {path: "KorisnikDetaljno", component:KorisnikDetaljnoComponent,canActivate:[AuthenticationGuard]},
      {path: "Popravke", component:PopravkeComponent,canActivate:[AuthenticationGuard]},
      {path: "PopravkaDetaljno", component:PopravkaDetaljnoComponent,canActivate:[AuthenticationGuard]},
      {path:"Vozila",component:VoziloDodajGlavnaComponent,canActivate:[AuthenticationGuard],
      children:[
        {path:"",component:VozilaComponent},
        {path:"VoziloDodaj",component:VoziloDodajGlavnaVoziloComponent},
        {path:"VoziloDodajLogicko",component:VoziloDodajGlavnaVoziloLogickoComponent}
      ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
