import {Http, Response, Headers, RequestOptionsArgs} from '@angular/http'
import {Inject} from '@angular/core'
import {Observable} from 'rxjs/Observable'

export class HttpAPIExampleService{

  constructor(@Inject(Http) private http:Http,
               @Inject('AppComponent.config') private config){}

  getRandomQuote(): Observable<Response>{
    return this.http.get(this.config.api+'random-quote')
  }

  getAuthRandomQuote(): Observable<Response>{
    return this.http.get(this.config.api+'/protected/random-quote')
  }
  postInService(): Observable<Response> {
    let headers: Headers = new Headers()
    headers.append('X-API-TOKEN', 'token')
    let opts: RequestOptionsArgs = {
        headers: headers
    }
    
    return this.http.post(this.config.api+'/protected/random-quote',
    JSON.stringify({body: 'bar'}), opts)
}
}
