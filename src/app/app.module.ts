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
import iznajmljivanjeReducer from './State/iznajmljivanje/iznajmljivanje.reducer';
import { IznajmljivanjaEffects } from './State/iznajmljivanje/iznajmljivanje.effect';
import { KorisnikKarticaComponent } from './components/radnik/korisnik-kartica/korisnik-kartica.component';
import { IznajmljivanjeComponent } from './components/radnik/iznajmljivanje/iznajmljivanje.component';
import { DodavanjeIznajmComponent } from './components/radnik/dodavanje-iznajm/dodavanje-iznajm.component';
import { RadnikKarticaComponent } from './components/radnik/radnik-kartica/radnik-kartica.component';
import { VozilaComponent } from './components/radnik/vozila/vozila.component';
import { VoziloDodajGlavnaComponent } from './components/radnik/vozilo-dodaj-glavna/vozilo-dodaj-glavna.component';
import { VoziloDodajGlavnaVoziloComponent } from './components/radnik/vozilo-dodaj-glavna-vozilo/vozilo-dodaj-glavna-vozilo.component';
import { VoziloDodajGlavnaVoziloLogickoComponent } from './components/radnik/vozilo-dodaj-glavna-vozilo-logicko/vozilo-dodaj-glavna-vozilo-logicko.component';
import { VoziloKarticaComponent } from './components/radnik/vozilo-kartica/vozilo-kartica.component';
import { VoziloDetaljnoComponent } from './components/radnik/vozilo-detaljno/vozilo-detaljno.component';
import { SastanakLjudiComponent } from './components/radnik/sastanak-ljudi/sastanak-ljudi.component';
import { SastanakRadnikComponent } from './components/radnik/sastanak-radnik/sastanak-radnik.component';

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
    RadniciComponent,
    KorisnikKarticaComponent,
    IznajmljivanjeComponent,
    DodavanjeIznajmComponent,
    RadnikKarticaComponent,
    VozilaComponent,
    VoziloDodajGlavnaComponent,
    VoziloDodajGlavnaVoziloComponent,
    VoziloDodajGlavnaVoziloLogickoComponent,
    VoziloKarticaComponent,
    VoziloDetaljnoComponent,
    SastanakLjudiComponent,
    SastanakRadnikComponent,
  
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    StoreModule.forRoot<appState>({korisnikState: korisnikReducer,centriState:centriReducer,vozilaState:vozilaReducer,iznajmljivanjeState:iznajmljivanjeReducer}),
    EffectsModule.forRoot([KorisnikEffects,CentarEffects,VozilaEffects,IznajmljivanjaEffects]),
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
