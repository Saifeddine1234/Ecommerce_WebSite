import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../produit.service';
export let browserRefresh = false;

@Component({
selector: 'app-vente-flash',
templateUrl: './vente-flash.component.html',
styleUrls: ['./vente-flash.component.scss']
})
export class VenteFlashComponent implements OnInit {
  url : any ;
  produits  :  any =[];
  cartproduit  :  any =[];
  panier  :  any =[];
  myItem : any  =[];
  cc : any  =[];
  s : any = false ;


  constructor(private produit : ProduitService , private route: ActivatedRoute) {
    //check for Navigation Timing API support
if (window.performance) {
  console.info("window.performance works fine on this browser");
}
console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  console.info( "This page is reloaded" );
} else {
  console.info( "This page is not reloaded");
}
this.panier = localStorage.getItem('produits');
console.log(this.panier);
   }

  ngOnInit() {
    this.url = this.route.snapshot.params['cat'];
    if(this.url){
      this.produit.getByCategorie(this.url).subscribe(
        result=>{
          console.log(result);
          console.log( result.venteflash);
          for( var i = 0; i< result.length; i++){
            var produitSolder = parseInt(result[i].prixProduit)   - ((parseInt(result[i].prixProduit)  * parseInt(result[i].remiseProduit)) / 100 )
            if( produitSolder == result[i].prixProduit ){
              this.produits[i] = {ID : result[i]._id , nomProduit : result[i].nomProduit,  prixSolder : produitSolder ,  prixProduit : '.' }
            }else{
              this.produits[i] = {ID : result[i]._id , nomProduit : result[i].nomProduit , prixSolder : produitSolder ,  prixProduit : result[i].prixProduit + ' DT'}
            }
          }
        }
      )
    }else{
      this.produit.getProduit().subscribe(
        result=>{
          for( var i = 0; i< result.length; i++){

            if(result[i].venteFlash){
            var produitSolder = parseInt(result[i].prixProduit)   - ((parseInt(result[i].prixProduit)  * parseInt(result[i].remiseProduit)) / 100 )
            if( produitSolder == result[i].prixProduit ){
              this.produits[i] = {ID : result[i]._id ,  nomProduit : result[i].nomProduit,  prixSolder : produitSolder ,  prixProduit : '.' }
            }else{
              this.produits[i] = {ID : result[i]._id , nomProduit : result[i].nomProduit , prixSolder : produitSolder ,  prixProduit : result[i].prixProduit  + ' DT' }
            }
          }
        }
        }
      )
    }
    console.log(this.produits);


  } 
  additem(cartproduit : any){
   
    this.panier = localStorage.getItem('produits');
    if(this.panier == null){
      this.cc.push(cartproduit.ID)
      localStorage.setItem( 'produits',this.cc);
console.log('errrrrreeeeuuuuur')
    }else{
      if(performance.navigation.type == 0)
      {
        this.cc.push(cartproduit.ID)
        localStorage.setItem( 'produits',this.cc);
        console.log(localStorage.getItem('produits'));
        this.panier = localStorage.getItem('produits');
      }
      else
      {
        if(this.s !== true)
        {
          this.s = true;
          this.panier = localStorage.getItem('produits');
          console.log(this.panier);
          this.cc.push(this.panier.split(","));
          localStorage.setItem( 'produits',this.cc);
        }
          this.cc.push(cartproduit.ID);
          localStorage.setItem( 'produits',this.cc);
          console.log(localStorage.getItem('produits'));
          this.panier = localStorage.getItem('produits');
           
   
      }
    }


  }

}
