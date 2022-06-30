import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { catchError } from 'rxjs';
import { iznajmljivanjeUprosceno } from 'src/app/models/iznajmljivanje-uprosceno';
import { IznajmljivanjaService } from 'src/app/services/iznajmljivanja.service';


@Component({
  selector: 'app-iznajmljivanje',
  templateUrl: './iznajmljivanje.component.html',
  styleUrls: ['./iznajmljivanje.component.css']
})
export class IznajmljivanjeComponent implements OnInit {

  constructor(private iznajmljivanjeService: IznajmljivanjaService) { }

  ngOnInit(): void {
  }

 
  zavrsi() {
    if(this.iznajmljivanje)
      this.iznajmljivanjeService.zavrsiIznajmljivanje(this.iznajmljivanje.id)
                                .subscribe(x=>{
                                  if(this.iznajmljivanje)
                                        this.iznajmljivanje = {...this.iznajmljivanje,zavrseno:true}
                              })
  }

  lepDatum(){
    if(this.iznajmljivanje){
      return new Date(this.iznajmljivanje.datum).toLocaleDateString()
    }
    return ""
  }

  kasni(iznajmljivanje: iznajmljivanjeUprosceno) {
    let datum = new Date(iznajmljivanje.datum)
    let rok = new Date()
    rok.setDate(datum.getDate()+iznajmljivanje.dana)
    return rok.getDate() - new Date(Date.now()).getDate()
  }

  zakasnio(){
    if(this.iznajmljivanje){
      let result = new Date(this.iznajmljivanje.datum)
      result.setDate(new Date(this.iznajmljivanje.datum).getDate()+this.iznajmljivanje.dana);
      if((result.getDate() - new  Date(Date.now()).getDate())>0) return true;
    }
    return false
  }
  @Input() iznajmljivanje: iznajmljivanjeUprosceno | null = null
}
