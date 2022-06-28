import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Centar } from 'src/app/models/centar';
import { Radnik } from 'src/app/models/radnik';

@Component({
  selector: 'app-radnik-kartica',
  templateUrl: './radnik-kartica.component.html',
  styleUrls: ['./radnik-kartica.component.css']
})
export class RadnikKarticaComponent implements OnInit {

  constructor() { }
  @Input() radnik: Radnik | null = null;
  @Input() centar: Centar | null = null;
  ngOnInit(): void {
  }
  @Output() Emiter : EventEmitter<Radnik> = new EventEmitter()
  emitujRadnika() {
    if(this.radnik)
      this.Emiter.emit(this.radnik)
  }
}
