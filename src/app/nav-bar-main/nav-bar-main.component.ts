import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-main',
  templateUrl: './nav-bar-main.component.html',
  styleUrls: ['./nav-bar-main.component.scss'],
})
export class NavBarMainComponent implements OnInit {

  constructor() { }

  toggleLabels() {
    // this._labels.showLabels = !this._labels.showLabels;
  }
  ngOnInit() {
  }

}
