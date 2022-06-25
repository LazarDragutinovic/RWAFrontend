import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from "@angular/material/toolbar"
import { MatButtonModule} from '@angular/material/button'
import { PocetnaStranaComponent } from './components/korisnik/pocetna-strana/pocetna-strana.component';
import { LoginComponent } from './components/korisnik/login/login.component';
import { RegistracijaComponent } from './components/korisnik/registracija/registracija.component';
import { DetaljnoAutomobilComponent } from './components/korisnik/detaljno-automobil/detaljno-automobil.component';
import { CentriComponent } from './components/korisnik/centri/centri.component';
import { ProfilComponent } from './components/korisnik/profil/profil.component';
import { GlavnaComponent } from './components/korisnik/glavna/glavna.component';
import { SastanakComponent } from './components/radnik/sastanak/sastanak.component';
import { LoginRadnikComponent } from './components/radnik/login-radnik/login-radnik.component';
import { RegistracijaRadnikComponent } from './components/radnik/registracija-radnik/registracija-radnik.component';
import { RadnikDetaljnoComponent } from './components/radnik/radnik-detaljno/radnik-detaljno.component';
import { KorisniciComponent } from './components/radnik/korisnici/korisnici.component';
import { KorisnikDetaljnoComponent } from './components/radnik/korisnik-detaljno/korisnik-detaljno.component';
import { PopravkeComponent } from './components/radnik/popravke/popravke.component';
import { PopravkaDetaljnoComponent } from './components/radnik/popravka-detaljno/popravka-detaljno.component';
import { GlavnaRadnikComponent } from './components/radnik/glavna-radnik/glavna-radnik.component';
import { PocetnaRadnikComponent } from './components/radnik/pocetna-radnik/pocetna-radnik.component';
import { RadniciComponent } from './components/radnik/radnici/radnici.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from "@angular/common/http"
import { KorisnikEffects } from './State/korisnik/korisnik.effect';
import { appState } from './State/appState';
import korisnikReducer from './State/korisnik/korisnik.reducer';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { CentarEffects } from './State/centri/centri.effect';
import centriReducer from './State/centri/centri.reducer';
import {MatCardModule} from '@angular/material/card';
import vozilaReducer from './State/vozila/vozila.reducer';
import { VozilaEffects } from './State/vozila/vozilo.effect';
@NgModule({
  declarations: [
    AppComponent,
    PocetnaStranaComponent,
    LoginComponent,
    RegistracijaComponent,
    DetaljnoAutomobilComponent,
    CentriComponent,
    ProfilComponent,
    GlavnaComponent,
    SastanakComponent,
    LoginRadnikComponent,
    RegistracijaRadnikComponent,
    RadnikDetaljnoComponent,
    KorisniciComponent,
    KorisnikDetaljnoComponent,
    PopravkeComponent,
    PopravkaDetaljnoComponent,
    GlavnaRadnikComponent,
    PocetnaRadnikComponent,
    RadniciComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    StoreModule.forRoot<appState>({korisnikState: korisnikReducer,centriState:centriReducer,vozilaState:vozilaReducer}),
    EffectsModule.forRoot([KorisnikEffects,CentarEffects,VozilaEffects]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
