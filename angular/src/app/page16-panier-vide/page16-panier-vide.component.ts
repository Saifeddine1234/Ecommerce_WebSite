import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-page16-panier-vide',
  templateUrl: './page16-panier-vide.component.html',
  styleUrls: ['./page16-panier-vide.component.scss']
})
export class Page16PanierVideComponent implements OnInit {

  constructor(private produit : ProduitService , private user : UserService ,private router : Router) {
  }
  ngOnInit(): void {

}

}
