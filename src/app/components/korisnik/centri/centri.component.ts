import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Centar } from 'src/app/models/centar';
import { appState } from 'src/app/State/appState';
import { loadCentri } from 'src/app/State/centri/centri.action';
import { centriSelector } from 'src/app/State/centri/centri.selector';

@Component({
  selector: 'app-centri',
  templateUrl: './centri.component.html',
  styleUrls: ['./centri.component.css']
})
export class CentriComponent implements OnInit {

  constructor(private store: Store<appState>, private domSanitizer: DomSanitizer) { }

  centri: Observable<Centar[]> = of([]);
  ngOnInit(): void {
    this.store.select(centriSelector).subscribe(x=>{
      if(x.length == 0) {
        this.store.dispatch(loadCentri())
      }
    }
    )
    
    this.centri = this.store.select(centriSelector)
    

   
  }
  slikaCentar(centar: Centar){
      if(centar.slika) 
        return this.domSanitizer.bypassSecurityTrustResourceUrl(centar.slika.url)
      return ""
  }

}
