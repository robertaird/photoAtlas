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
  Math: any;
  constructor(public dialog: MatDialog) {
    this.Math = Math;
  }

  config = {
    mapStyle,
  };

  photos = [];

  openDialog(photo) {
    console.log('selected?', photo);
    this.dialog.open(PhotoModalComponent, {
      data: {
        photoUrl: photo.images.standard_resolution,
      },
    });
  }

  ngOnInit() {
    axios.get(`/photos${window.location.search}`)
      .then(({ data }) => {
        this.photos = data.photos;
      }).catch((err) => console.error(err));
  }

}
