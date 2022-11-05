import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-pub-haut',
  templateUrl: './pub-haut.component.html',
  styleUrls: ['./pub-haut.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false, showIndicators: false } }
  ]
})
export class PubHautComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
}
