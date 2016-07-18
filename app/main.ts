import {Component} from '@angular/core'
import {HelloWorldComponent} from './helloworld/hello-world.component'
import {ColoresComponent} from './colores/colores.component';
import {DataBindingComponent} from './example/databinding.component';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Routes} from '@angular/router';

@Component({
  selector: 'ng2-app',
  template: `<br/>
            <h1>Component Router</h1>
            <nav>
              <a [routerLink]="['/example']">Example</a>
              <a [routerLink]="['/colores']">Colores</a>
            </nav>
            <router-outlet></router-outlet>
            `,
  directives: [HelloWorldComponent, ColoresComponent, DataBindingComponent, ROUTER_DIRECTIVES]
})

@Routes([
  {path:'/example/:param', component: HelloWorldComponent},
  {path:'/example', component: HelloWorldComponent},
  {path:'/colores', component: ColoresComponent}
])
export class AppComponent{

  constructor(){
  }

}
