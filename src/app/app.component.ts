import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  public location = '';
  public eventSub;

  constructor(private _router: Router) {
    // this.location = window.location.pathname;
    this.eventSub = _router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        this.location = event.url;
      }
    });
  }

}
