import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Korisnik } from 'src/app/models/korisnik';

@Component({
  selector: 'app-korisnik-kartica',
  templateUrl: './korisnik-kartica.component.html',
  styleUrls: ['./korisnik-kartica.component.css']
})
export class KorisnikKarticaComponent implements OnInit {

  constructor() { }

  @Input() korisnik: Korisnik | null = null

  @Output() Emiter: EventEmitter<Korisnik> = new EventEmitter();

  ngOnInit(): void {
  }

  emitujKorisnika() {
    if(this.korisnik)
      this.Emiter.emit(this.korisnik)
  }
  
}
