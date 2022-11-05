import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2500, noPause: false, showIndicators: false } }
  ]
})
export class PubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
