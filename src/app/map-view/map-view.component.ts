import { Component, OnInit } from '@angular/core';
import mapStyle from '../../config/map-style';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  config = {
    mapStyle,
  }
  constructor() { }

  ngOnInit() {
  }

}
