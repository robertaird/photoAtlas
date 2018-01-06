import { Injectable } from '@angular/core';

@Injectable()
export class VisibleLabelsService {

  constructor() { }

  showLabels = false;
  visible = this.showLabels ? 'on' : 'off';

}
