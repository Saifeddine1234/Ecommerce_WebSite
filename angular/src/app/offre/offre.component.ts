import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent implements OnInit {
  produits  :  any =[];
  constructor(private produit : ProduitService , private route: ActivatedRoute) { }
  
ngOnInit() {
  this.produit.getProduit().subscribe(
    result=>{
      result.sort(()=> Math.random() - 0.5)
      console.log(result);
      for( var i = 0; i<11; i++){
          var produitSolder = parseInt(result[i].prixProduit)   - ((parseInt(result[i].prixProduit)  * parseInt(result[i].remiseProduit)) / 100 )
          if( produitSolder == result[i].prixProduit ){
            this.produits[i] = {ID : result[i]._id , Ref : result[i]._id.substr(18,6) , nomProduit : result[i].nomProduit,  prixSolder : produitSolder ,  prixProduit : '.' ,  imageProduit : "/assets/meeting-01.jpg" }
          }else{
            this.produits[i] = {ID : result[i]._id , Ref : result[i]._id.substr(18,6), nomProduit : result[i].nomProduit , prixSolder : produitSolder ,  prixProduit : result[i].prixProduit  ,  imageProduit : "/assets/meeting-01.jpg" }
          }        
      }
    }
  )
 // console.log(this.route.snapshot.params.user_id);
} 
  itemsPerSlide = 4;
  singleSlideOffset = true;
  noWrap = false;
  slidesChangeMessage = '';

 
  onSlideRangeChange(indexes: number[]|void): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }



}
