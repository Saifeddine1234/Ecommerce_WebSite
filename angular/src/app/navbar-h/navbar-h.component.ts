import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-navbar-h',
  templateUrl: './navbar-h.component.html',
  styleUrls: ['./navbar-h.component.scss']
})
export class NavbarHComponent implements OnInit {
  categories : any;
  cat : any;
  constructor(private produit : ProduitService) { }
  getbycat(cat : String){
    console.log("11111");
    this.produit.getByCategorie(cat).subscribe(
      result=>{
        this.cat = result;  
        console.log(this.cat);
      }
    )
  }
  ngOnInit() {
    this.produit.getCategorie().subscribe(
      result=>{
        this.categories = result;  
        console.log(this.categories);
      }
    )
} 

}
