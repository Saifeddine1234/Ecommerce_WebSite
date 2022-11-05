import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-vente-f',
  templateUrl: './vente-f.component.html',
  styleUrls: ['./vente-f.component.scss']
})
export class VenteFComponent implements OnInit {

  constructor( private produit : ProduitService) { }
  itemsPerSlide = 5;
  singleSlideOffset = true;
  noWrap = false;
  produits : any = [];
 
  slidesChangeMessage = '';

  onSlideRangeChange(indexes: number[]|void): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }

  ngOnInit(): void {
    this.produit.getProduit().subscribe(
      result=>{
        var s = 0 ;
        for( var i = 0; i< result.length; i++){
          console.log(result[i])
          if(result[i].venteFlash){
            s++;
          }
          if(result[i].venteFlash && s <= 4 ){
          var produitSolder = parseInt(result[i].prixProduit)   - ((parseInt(result[i].prixProduit)  * parseInt(result[i].remiseProduit)) / 100 )
          if( produitSolder == result[i].prixProduit ){
            this.produits[i] = {ID : result[i]._id ,  nomProduit : result[i].nomProduit,  prixSolder : produitSolder ,  prixProduit : '.' ,  imageProduit : "/assets/meeting-01.jpg"  }
          }else{
            this.produits[i] = {ID : result[i]._id , nomProduit : result[i].nomProduit , prixSolder : produitSolder ,  prixProduit : result[i].prixProduit  + ' DT' , imageProduit : "/assets/meeting-01.jpg"}
          }
        }
      }
      }
    )
  }

}
