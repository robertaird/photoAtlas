import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material';
import { NguiMapModule } from '@ngui/map';

import { GOOGLE_MAPS_URI } from '../config/config';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MapViewComponent } from './map-view/map-view.component';
import { PhotoModalComponent } from './photo-modal/photo-modal.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavBarLoginComponent } from './nav-bar-login/nav-bar-login.component';
import { NavBarMainComponent } from './nav-bar-main/nav-bar-main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapViewComponent,
    PhotoModalComponent,
    WelcomeComponent,
    NavBarLoginComponent,
    NavBarMainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    NguiMapModule.forRoot({ apiUrl: GOOGLE_MAPS_URI }),
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'main', component: MapViewComponent /* children: [] */ },
      // { path: '', children: [
      //   { path: '', component: LoginComponent, outlet: 'main' },
      //   // { path: '', component: NavBarLoginComponent, outlet: 'nav' },
      // ]},
      // { path: 'main', children: [
      //   // { path: '', component: NavBarMainComponent, outlet: 'nav' },
      //   { path: '', component: MapViewComponent, outlet: 'main' /* children: [] */ },
      // ]}
    ])
  ],
  entryComponents: [MapViewComponent, PhotoModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
