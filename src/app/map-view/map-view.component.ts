import { Component, OnInit, AfterContentChecked } from '@angular/core';
import axios from 'axios';
import { MatDialog } from '@angular/material/dialog';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';
import { MapConfigService } from '../map-config.service';

declare const google: any;

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
  providers: [MapConfigService]
})
export class MapViewComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public mapConfig: MapConfigService
  ) {}

  config = {
    mapStyle: this.mapConfig.style(false),
  };
  photos: any[] = [];
  boundsReady = false;
  mapReady = false;
  bounds: any;
  map: any;

  onMapReady(map) {
    this.map = map;
    this.mapReady = true;
    this.centerMap();
  }

  openDialog(photo) {
    photo.zIndex = photo.zIndex ? photo.zIndex - 1 : -1;
    this.dialog.open(PhotoModalComponent, {
      data: {
        photoUrl: photo.images.standard_resolution,
        caption: photo.caption,
        location: photo.location.name,
      },
    });
  }

  ngOnInit() {
    this.bounds = new google.maps.LatLngBounds();
    axios.get(`/photos${window.location.search}`)
      .then(({ data }) => {
        this.photos = data.photos;

        this.photos.forEach((photo: any) => {
          const position = new google.maps.LatLng(photo.location.latitude, photo.location.longitude);
          this.bounds.extend(position);
        });
        this.boundsReady = true;
        this.centerMap();
      }).catch((err) => {
        console.error(err);
      });
  }

  centerMap() {
    if (this.boundsReady && this.mapReady) {
      this.map.fitBounds(this.bounds);
    }
  }
}
