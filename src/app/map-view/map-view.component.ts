import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { MatDialog } from '@angular/material/dialog';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';
import { MapConfigService } from '../map-config.service';

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
