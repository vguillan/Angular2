
import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng2-data-child',
  template: `<p id="dataChild">Hello wold data-child {{parentName}}</p>
              <button (onclick)="emitirPadre()">Data child button informar Padre</button>
            `
})
export class DataChildComponent implements OnInit{

    @Input() parentName: string

    @Output() informarPadre =  new EventEmitter()

    ngOnInit(){
    }

    emitirPadre(){
      this.informarPadre.emit('Soy tu hijo')
    }

}
