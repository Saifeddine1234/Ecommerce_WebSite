import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  itemsPerSlide = 4;
  singleSlideOffset = true;
  noWrap = true;
 
  slidesChangeMessage = '';
 
  slides = [
    {image: '/assets/single-meeting.jpg'},
    {image: '/assets/meeting-02.jpg'},
    {image: '/assets/promo.png'},
    {image: '/assets/single-meeting.jpg'},
    {image: '/assets/meeting-02.jpg'},

    {image: '/assets/meeting-02.jpg'},
    {image: '/assets/promo.png'},
    {image: '/assets/meeting-04.jpg'},

    {image: '/assets/meeting-02.jpg'},
    {image: '/assets/meeting-03.jpg'},
    {image: '/assets/meeting-04.jpg'},
    {image: '/assets/meeting-01.jpg'},
    {image: '/assets/promo.png'},
    {image: '/assets/meeting-03.jpg'},
    {image: '/assets/meeting-04.jpg'},
    {image: '/assets/meeting-01.jpg'},
    {image: '/assets/meeting-02.jpg'},
    {image: '/assets/meeting-03.jpg'},
    {image: '/assets/meeting-04.jpg'},
    {image: '/assets/meeting-01.jpg'},
    {image: '/assets/meeting-02.jpg'},
    {image: '/assets/meeting-03.jpg'},
    {image: '/assets/meeting-04.jpg'},
    {image: '/assets/meeting-01.jpg'},
    {image: '/assets/meeting-02.jpg'},
    {image: '/assets/meeting-03.jpg'},
    {image: '/assets/meeting-04.jpg'},
  ];
 
  onSlideRangeChange(indexes: number[]|void): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }

  ngOnInit(): void {
  }

}
