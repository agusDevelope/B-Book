import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const mymap: any = L.map('mapa').setView([19.414462, -99.100], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
    }).addTo(mymap);

    const book = L.icon({
      iconUrl: 'assets/bookp.png',
      // shadowUrl: 'leaf-shadow.png',
      iconSize: [30, 45], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [15, 70], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    L.marker([19.435306, -99.140053], {
      icon: book
    }).addTo(mymap);
    L.marker([19.436375, -99.134554], {
      icon: book
    }).addTo(mymap);
    L.marker([19.434582, -99.138098], {
      icon: book
    }).addTo(mymap);
    L.marker([19.435876, -99.130368], {
      icon: book
    }).addTo(mymap);
    L.marker([19.427421, -99.137432], {
      icon: book
    }).addTo(mymap);
    L.marker([19.436891, -99.134534], {
      icon: book
    }).addTo(mymap);
    L.marker([19.436640, -99.136432], {
      icon: book
    }).addTo(mymap);
    L.marker([19.439459, -99.138663], {
      icon: book
    }).addTo(mymap);
  }
  }


