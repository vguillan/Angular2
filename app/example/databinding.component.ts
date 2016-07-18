
import {Component, OnInit } from '@angular/core';
import {DataChildComponent} from '../example/datachild.component';

import { ExampleService } from './example.service'

@Component({
  selector: 'ng2-data-binding',
  template: `<p id="dataBinding">Hello wold data-binding</p>
            <p> {{name}}</p>
            <p [innerHTML] = "'My favourite is ' + name"></p>
            <button (click)="interpolationExample(name)">Soy un botón</button>
            <ng2-data-child [parentName]="name"
             (informarPadre)=handleInformarPadreEvent($event)>
             {{mensajeSon}}</ng2-data-child>

            `,
  directives: [DataChildComponent],
  host:{
      '(click)': 'onMyClick()'
  }
})
export class DataBindingComponent implements OnInit{

  private name: string
  private mensajeSon: string
  interpolationExample(name:string){
      console.log(name)
  }

  ngOnInit(){
    this.name = 'Víctor'
  }

  handleInformarPadreEvent($event){
      this.mensajeSon = $event
  }

  onMyClick(){
    console.log('On click')
  }

}
