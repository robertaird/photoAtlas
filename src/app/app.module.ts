import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material';
import { NguiMapModule } from '@ngui/map';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PhotoModalComponent } from './photo-modal/photo-modal.component';
import { MapViewComponent } from './map-view/map-view.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GOOGLE_MAPS_URI } from '../config/config';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PhotoModalComponent,
    MapViewComponent,
    WelcomeComponent
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
      { path: 'map', component: MapViewComponent /* children: [] */ },
    ])
  ],
  entryComponents: [MapViewComponent, PhotoModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
