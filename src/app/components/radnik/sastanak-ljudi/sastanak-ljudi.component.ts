import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { debounceTime, filter, map, Observable, switchMap } from 'rxjs';
import { Radnik } from 'src/app/models/radnik';
import { Sastanak } from 'src/app/models/sastanak';
import { RadnikService } from 'src/app/services/radnik.service';
import { SastanciService } from 'src/app/services/sastanci.service';

@Component({
  selector: 'app-sastanak-ljudi',
  templateUrl: './sastanak-ljudi.component.html',
  styleUrls: ['./sastanak-ljudi.component.css']
})
export class SastanakLjudiComponent implements OnInit {

  constructor(private sastanakService: SastanciService, private radnikService: RadnikService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.sastanak)
    if(this.sastanak)
      this.sastanakService.sviPozvaniNaSastanak(this.sastanak.id)
                          .subscribe(x=>{
                            this.pozvani = x;
                          })
    this.pretragaRadnika.valueChanges
    .pipe(debounceTime(500),
          map(x=>x.email)
          ,
          filter(x=>x.length>0)
          ,
          switchMap(x=>this.radnikService.pretraziRednike(x))
    ).subscribe(x=>{this.moguciRadnici =x})
  }

  @Output() Emiter: EventEmitter<null> = new EventEmitter()

  zavrsiPozivanje(){
    this.Emiter.emit(null);
  }



  pozvani: Radnik[] = [];

  izabraniRadnikForm = this.formBuilder.group({
    id:["",[Validators.required]]
  })  

  pozovi(){
    if(this.izabraniRadnikForm.valid) {
      let {id} = this.izabraniRadnikForm.value
      if(id < 0) return
      if(this.pozvani.find(r=>r.id == id)) return
      
      if(this.sastanak)
            this.sastanakService.pozoviRadnika(id, this.sastanak.id)
                                .subscribe(x=>{
                                  let radnik = this.moguciRadnici.find(x=>x.id==id)
                                  if(radnik)
                                    this.pozvani = [...this.pozvani,radnik]
                                })
    }
    
  }

  opozovi(radnik:Radnik) {
    if(this.sastanak) {
      this.sastanakService.opozoviRadnika(radnik.id,this.sastanak.id).subscribe(x=>{
        let novi = this.pozvani.filter(x=>x.id!=radnik.id)
        this.pozvani = [...novi]
      })
    }
  }
  pretragaRadnika = this.formBuilder.group({
    email:[""]
  })

  moguciRadnici: Radnik[] = [] 

  @Input() sastanak: Sastanak | null = null;



}
