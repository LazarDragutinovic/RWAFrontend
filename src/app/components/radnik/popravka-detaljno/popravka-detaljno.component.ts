import { Component, Input, OnInit } from '@angular/core';
import { Popravka } from 'src/app/models/popravka';
import { PopravkeService } from 'src/app/services/popravke.service';

@Component({
  selector: 'app-popravka-detaljno',
  templateUrl: './popravka-detaljno.component.html',
  styleUrls: ['./popravka-detaljno.component.css']
})
export class PopravkaDetaljnoComponent implements OnInit {

  constructor(private popravkaService: PopravkeService) { }

  ngOnInit(): void {
  }


  @Input() popravka: Popravka | null = null;
  @Input() idm: number | undefined = -1;
  @Input() mehanicar: boolean = false;
  prikaziPreuzmi() {
    if(this.popravka && this.popravka.mehanicar == null  && !this.popravka.obavljena && this.mehanicar) return true;
    return false;
  }

  prikaziZavrsi() {
    if(this.popravka && this.popravka.mehanicar && this.popravka.mehanicar.id == this.idm && !this.popravka.obavljena && this.mehanicar) return true;
    return false;
  }

  preuzmiPopravku() {
    if(this.popravka && this.idm) {
      if(confirm("Da li ste sigurni da zelite da preuzmete ovu popravku?") == false) return
      this.popravkaService.preuzmiPopravku(this.idm,this.popravka.id).subscribe(x=>{
        if(this.popravka)
          this.popravka.mehanicar = x.mehanicar
      })
    }
  }

  zavrsiPopravku() {
    if(this.popravka) {
      if(confirm("Da li ste sigurni da zelite da zavrsite ovu popravku?") == false) return
      this.popravkaService.obaviPopravku(this.popravka.id," ",0).subscribe(x=>{
        if(this.popravka) this.popravka.obavljena = true;
      })
    }
  }
}
