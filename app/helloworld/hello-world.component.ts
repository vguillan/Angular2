import { Component, OnInit, Inject } from '@angular/core'

import { HelloWorldService } from './hello-world.service'

import {ExampleService} from '../example/example.service'
import {RouteSegment} from '@angular/router';
import { HttpAPIExampleService } from '../example/httpAPIExampleService.service';

@Component({
  selector: 'ng2-hello-world',
  providers: [HelloWorldService, ExampleService, HttpAPIExampleService],
  template: `<p id="hello">{{hello}}</p>
              <p id="parameterIn">{{parameterIn}}</p>
              <p id="randomQuote">{{randomQuote}}</p>`

})

export class HelloWorldComponent implements OnInit{
  hello: string
  private parameterIn: string
  private randomQuote: string

  constructor(private routeSegment:RouteSegment, private helloWorldService:HelloWorldService, private httpAPIExampleService:HttpAPIExampleService){
  }

  ngOnInit(){
    this.hello = this.helloWorldService.getHello()
    this.parameterIn = this.routeSegment.getParam('param')
    this.getRandomQuote()
  }

  getRandomQuote(){
    this.httpAPIExampleService.getRandomQuote().subscribe(
      results => this.randomQuote = results.text(),
      error => console.log(error)
    )
  }

}
