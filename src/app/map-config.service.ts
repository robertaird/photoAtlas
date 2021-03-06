import { Injectable } from '@angular/core';
import { MapConfigPipe } from './map-config.pipe';

@Injectable()
export class MapConfigService {

  constructor(private showLabels: MapConfigPipe) { }

  public style = (visible) => [
    {
      'featureType': 'administrative',
      'elementType': 'labels.text',
      'stylers': [
        {
          'visibility': this.showLabels.transform(),
        }
      ]
    },
    {
      'featureType': 'administrative.locality',
      'elementType': 'labels.text',
      'stylers': [
        {
          'visibility': this.showLabels.transform()
        }
      ]
    },
    {
      'featureType': 'administrative.neighborhood',
      'elementType': 'labels.text',
      'stylers': [
        {
          'visibility': this.showLabels.transform()
        }
      ]
    },
    {
      'featureType': 'landscape.man_made',
      'elementType': 'labels.text',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'landscape.natural',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'visibility': 'on'
        },
        {
          'color': '#e0efef'
        }
      ]
    },
    {
      'featureType': 'landscape.natural',
      'elementType': 'labels.text',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'visibility': 'on'
        },
        {
          'hue': '#1900ff'
        },
        {
          'color': '#c0e8e8'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'labels.text',
      'stylers': [
        {
          'visibility': this.showLabels.transform()
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'geometry',
      'stylers': [
        {
          'lightness': 100
        },
        {
          'visibility': 'simplified'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'labels',
      'stylers': [
        {
          'visibility': this.showLabels.transform()
        }
      ]
    },
    {
      'featureType': 'transit',
      'elementType': 'labels.text',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'transit',
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'transit.line',
      'elementType': 'geometry',
      'stylers': [
        {
          'visibility': 'on'
        },
        {
          'lightness': 700
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'all',
      'stylers': [
        {
          'color': '#7dcdcd'
        }
      ]
    }
  ]


}
