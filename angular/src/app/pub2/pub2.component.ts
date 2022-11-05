import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pub2',
  templateUrl: './pub2.component.html',
  styleUrls: ['./pub2.component.scss']
})
export class Pub2Component implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  centre_assistance(){
    this.router.navigate(['centre-assistance']);
  }
}
