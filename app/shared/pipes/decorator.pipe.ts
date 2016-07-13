import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'decorator', pure:true
})
export class DecoratorPipe implements PipeTransform{
  transform(value: string, index:string, lfo:string):string{
      return index + ' - ' + value +':'+lfo
  }
}
