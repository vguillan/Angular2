import { ExampleService } from '../example/example.service'
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class HelloWorldService{

  //private exampleService:ExampleService

  constructor(@Inject('AppComponent.config') private config, private exampleService:ExampleService){}

  getHello():string{
    //this.exampleService = new ExampleService()
    return 'Hello World Víctor! ' + this.exampleService.getExample() //+ this.config.probandoConfig
  }
}
