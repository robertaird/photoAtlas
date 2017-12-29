import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { MatDialog } from '@angular/material/dialog';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';
import mapStyle from '../../config/map-style';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  config = {
    mapStyle,
  };

  photos = [];
  photoLatLng = [];
  seenLatLng = {};

  openDialog(photo) {
    console.log(photo);
    photo.zIndex = photo.zIndex ? photo.zIndex - 1 : -1;
    this.dialog.open(PhotoModalComponent, {
      data: {
        photoUrl: photo.images.standard_resolution,
        caption: photo.caption,
        location: photo.location.name,
      },
    });
  }

  test(event) {
    console.log(event);
  }
  // onMapReady(map) {
  //   console.log('map', map);
  //   console.log('markers', map.markers);  // to get all markers as an array
  // }
  // onIdle(event) {
  //   console.log('map', event.target);
  // }
  // onMarkerInit(marker) {
  //   console.log('marker', marker);
  // }

  handleOverlap(lat, lng) {
    return [lat, lng];
  }

  ngOnInit() {
    this.photoLatLng = [];
    axios.get(`/photos${window.location.search}`)
      .then(({ data }) => {
        this.photos = data.photos;
      }).catch((err) => console.error(err));
  }

}
