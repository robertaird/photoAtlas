import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { MatDialog } from '@angular/material/dialog';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';
import mapStyle from '../../config/map-style';
import { VisibleLabelsService } from '../visible-labels.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
  providers: [VisibleLabelsService]
})
export class MapViewComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private _labels: VisibleLabelsService
  ) {}

  config = {
    mapStyle: mapStyle(this._labels.visible),
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
    axios.get(`/photos${window.location.search}`)
      .then(({ data }) => {
        this.photos = data.photos;
      }).catch((err) => console.error(err));
  }

}
