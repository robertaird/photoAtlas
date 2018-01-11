import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showLabels'
})
export class MapConfigPipe implements PipeTransform {

  showLabels = false;

  transform(): any {
    return this.showLabels ? 'on' : 'off' ;
  }

}
