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
  };

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(PhotoModalComponent, {
      data: {
        photoUrl: 'https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/17266238_170114036834363_5827811553092567040_n.jpg',
      },
    });
  }

  ngOnInit() {
  }

}
