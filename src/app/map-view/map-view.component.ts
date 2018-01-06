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
    mapStyle: mapStyle(),
  };
  photos = [];

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
    // this.photoLatLng = [];
    axios.get(`/photos${window.location.search}`)
      .then(({ data }) => {
        this.photos = data.photos;
      }).catch((err) => console.error(err));
  }

}
