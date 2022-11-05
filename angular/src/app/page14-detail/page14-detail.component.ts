import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-page14-detail',
  templateUrl: './page14-detail.component.html',
  styleUrls: ['./page14-detail.component.scss']
})
export class Page14DetailComponent implements OnInit {
  url : any ;
  produitSolder : any ;
  produits  :  any ;
  cartproduit  :  any =[];
  panier  :  any =[];
  myItem : any  =[];
  cc : any  =[];
  s : any = false ;
  constructor(private produit : ProduitService , private route: ActivatedRoute) { }

  
  ngOnInit() {
    this.url = this.route.snapshot.params['id']; 
    console.log(this.url);
    
    if(this.url){
      this.produit.getByid(this.url).subscribe(
        result=>{
          this.produits = result;
          this.produitSolder = parseInt(result[0].prixProduit)   - ((parseInt(result[0].prixProduit)  * parseInt(result[0].remiseProduit)) / 100 )
        }
      )
    }

  } 
}
