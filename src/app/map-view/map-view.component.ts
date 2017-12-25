import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';
import mapStyle from '../../config/map-style';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  config = {
    mapStyle,
  }
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(PhotoModalComponent, {
      data: {
        animal: 'panda',
      },
    })
  }

  ngOnInit() {
  }

}
