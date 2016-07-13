import {Component} from '@angular/core'
import {HelloWorldComponent} from './helloworld/hello-world.component'
import {ColoresComponent} from './colores/colores.component';

@Component({
  selector: 'ng2-app',
  template: `<ng2-hello-world></ng2-hello-world><ng2-colores></ng2-colores>`,
  directives: [HelloWorldComponent, ColoresComponent]
})

export class AppComponent{

  constructor(){
  }

}
