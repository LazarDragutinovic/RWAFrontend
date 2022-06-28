import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SlikaAutomobila } from 'src/app/models/slika-Automobila';
import { Vozilo } from 'src/app/models/vozilo';

@Component({
  selector: 'app-vozilo-kartica',
  templateUrl: './vozilo-kartica.component.html',
  styleUrls: ['./vozilo-kartica.component.css']
})
export class VoziloKarticaComponent implements OnInit {

  constructor(private domSanitazer: DomSanitizer) { }

  ngOnInit(): void {
    if(this.vozilo?.slike)
    this.slika = this.vozilo?.slike[0]
  }

  @Output() Emitter: EventEmitter<Vozilo> = new EventEmitter()

  emitujVozilo(){
    if(this.vozilo)
    this.Emitter.emit(this.vozilo)
  }

  Slika():SafeUrl {
    if(this.slika) return this.domSanitazer.bypassSecurityTrustResourceUrl(this.slika.url)
    return ""
  }
  slika: SlikaAutomobila | undefined;

  @Input() vozilo : null | Vozilo = null;
}
