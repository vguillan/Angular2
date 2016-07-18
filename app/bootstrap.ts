///<reference path="./../typings/main.d.ts"/>
import 'reflect-metadata'
import 'es6-shim'
import 'rxjs'
import 'zone.js/dist/zone'
import 'zone.js/dist/long-stack-trace-zone'
import { bootstrap } from '@angular/platform-browser-dynamic'
import {AppComponent} from './main'

import {provide } from '@angular/core';
import {ExampleService, ExampleMockFakeService} from './example/example.service'
//import {ExampleMockFakeService} from './example/exampleMockFake.service'

// Routing
import {ROUTER_PROVIDERS} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http'

//bootstrap(AppComponent, [ExampleService])
//bootstrap(AppComponent)
//bootstrap(AppComponent, [provide(ExampleService, {useClass:ExampleMockFakeService})])

let config = {
    probandoConfig: 'Provide value config',
    api: 'http://localhost:3001/api/'
}
// Ver qué sucede con esta configo que no coge los providers y la LocationStrategy.
bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  provide('AppComponent.config',{useValue: config}),
])
