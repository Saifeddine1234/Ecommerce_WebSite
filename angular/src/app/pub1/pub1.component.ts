import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-pub1',
  templateUrl: './pub1.component.html',
  styleUrls: ['./pub1.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1000, noPause: false, showIndicators: false } }
  ]
})
export class Pub1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
