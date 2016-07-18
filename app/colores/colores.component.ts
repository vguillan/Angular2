import {DecoratorPipe} from "../shared/pipes/decorator.pipe";
import {Component, OnInit, Inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ng2-colores',
  template: `<p id="colores">{{colores}}</p>
    <p>The time is running out: {{date | date:dateFormat}}</p>
    <p>The currency: {{currency | currency:EUR:true}}</p>
    <div *ngIf="show">
    <ul>
      <li *ngFor="let color of colores; let i=index; let l=last; let o=odd; let e=even"
          [ngStyle]="{'font-style': fontStyle, 'color': color}"
          [ngClass]="{odd:o, even:e, last:l}">
          {{color | decorator:i:lfo | replace:color:nombre | uppercase}}
          <span [ngSwitch]="color">
            <span *ngSwitchWhen="'blue'">Yo soy azul</span>
            <span *ngSwitchDefault>No soy azul</span>
          </span>
      </li>
    </ul>
    <button (click)="onClickButton()">Navegar a example</button>
    </div>`,
  styles: [`
    .odd{
        background-color: grey;
    }
    .even{
        background-color: blue;
    }
    .last{
        background-color: brown;
    }
  `],
  pipes:[DecoratorPipe]
})

export class ColoresComponent implements OnInit{

  private colores: Array<String>
  private fontStyle: String
  private clases: Array<String>
  private nombre:String
  private lfo:String
  private date: Date
  private dateFormat:String
  private show: boolean
  private currency: number

  constructor(@Inject(Router) private router:Router){

  }

  ngOnInit(){
    this.colores = ['red', 'blue', 'green']
    this.fontStyle = 'italic'
    this.show=true
    this.nombre="Víctor"
    this.lfo = "chorizo"
    this.date = new Date()
    this.dateFormat = "mediumTime"

    setInterval(()=>{
      this.date = new Date();
    }, 1000)

    this.currency = 77.657
  }

  onClickButton(){
    console.log('click')
    this.router.navigate(['/example', 'parameter'])
  }

}
