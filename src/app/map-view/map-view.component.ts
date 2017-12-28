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

  openDialog(photo) {
    console.log('selected?', photo);
    this.dialog.open(PhotoModalComponent, {
      data: {
        photoUrl: photo.images.standard_resolution.url,
      },
    });
  }

  ngOnInit() {
    axios.get(`/photos${window.location.search}`)
      .then(({ data }) => {
        this.photos = data.photos.data;
        console.log(this.photos);
      }).catch((err) => console.error(err));
  }

}
