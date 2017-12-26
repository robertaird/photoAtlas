import { Component, OnInit } from '@angular/core';
import { INSTAGRAM_URI } from '../../config/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'Welcome to';
  instagramUri = INSTAGRAM_URI;
  demoUri = '/map?code=demo';

  constructor() { }

  loginInstagram() {
    window.location.href = this.instagramUri;
  }

  demoMode() {
    window.location.href = this.demoUri;
  }

  ngOnInit() {
  }

}
