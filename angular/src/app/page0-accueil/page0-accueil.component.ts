import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page0-accueil',
  templateUrl: './page0-accueil.component.html',
  styleUrls: ['./page0-accueil.component.scss']
})
export class Page0AccueilComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
 
}
