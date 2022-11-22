import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../produit.service';
export let browserRefresh = false;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
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
    this.url = this.route.snapshot.params['box'];
    console.log(this.url);
    if(this.url != null ){
      this.produit.getSearch(this.url).subscribe(
        result=>{
          console.log(result);
          for( var i = 0; i< result.length; i++){
            var produitSolder = parseInt(result[i].prixProduit)   - ((parseInt(result[i].prixProduit)  * parseInt(result[i].remiseProduit)) / 100 )
            if( produitSolder == result[i].prixProduit ){
              this.produits[i] = {ID : result[i]._id.substr(18,6) , nomProduit : result[i].nomProduit,  prixSolder : produitSolder ,  prixProduit : '.' }
            }else{
              this.produits[i] = {ID : result[i]._id.substr(18,6) , nomProduit : result[i].nomProduit , prixSolder : produitSolder ,  prixProduit : result[i].prixProduit + ' DT'}
            }
          }
        }
      )
    }else{
      this.produit.getProduit().subscribe(
        result=>{
          console.log(result);
          for( var i = 0; i< result.length; i++){
            var produitSolder = parseInt(result[i].prixProduit)   - ((parseInt(result[i].prixProduit)  * parseInt(result[i].remiseProduit)) / 100 )
            if( produitSolder == result[i].prixProduit ){
              this.produits[i] = {ID : result[i]._id.substr(18,6) ,  nomProduit : result[i].nomProduit,  prixSolder : produitSolder ,  prixProduit : '.' }
            }else{
              this.produits[i] = {ID : result[i]._id.substr(18,6) , nomProduit : result[i].nomProduit , prixSolder : produitSolder ,  prixProduit : result[i].prixProduit  + ' DT' }
            }
          }
        }
      )
    }
    console.log(this.produits);



    //getbySearch 
    

  } 
  additem(cartproduit : any){
   console.log(cartproduit)
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
