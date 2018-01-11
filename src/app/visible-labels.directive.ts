import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appVisibleLabels]'
})
export class VisibleLabelsDirective {

  constructor() { }

  @Input()

  showLabels = false;

}
