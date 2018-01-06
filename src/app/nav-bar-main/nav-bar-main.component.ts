import { Component, OnInit } from '@angular/core';
import { VisibleLabelsService } from '../visible-labels.service';

@Component({
  selector: 'app-nav-bar-main',
  templateUrl: './nav-bar-main.component.html',
  styleUrls: ['./nav-bar-main.component.scss'],
  providers: [VisibleLabelsService]
})
export class NavBarMainComponent implements OnInit {

  constructor(private _labels: VisibleLabelsService) { }

  ngOnInit() {
  }

}
