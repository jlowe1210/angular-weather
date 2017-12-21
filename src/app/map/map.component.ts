import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnChanges {

@Output() getCoords = new EventEmitter<{lat: number, lng: number}>();

  @Input() latitude;
  @Input() longitude;

  // google maps zoom level
  zoom: number = 1;

  // initial center position for the map
  lat: number = 0;
  lng: number = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.latitude.currentValue !== 0 && changes.longitude.currentValue !== 0) {
      this.zoom = 10;
    }
    this.lat = (changes.latitude.currentValue);
    this.lng = (changes.longitude.currentValue);
  }

  setLoction(e) {
    this.lat = e.coords.lat;
    this.lng = e.coords.lng;
    const location = {
      lat: e.coords.lat,
      lng: e.coords.lng
    };
    this.zoom = 10;
    this.getCoords.emit(location);
  }

}
