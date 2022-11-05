import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-nos-categorie',
  templateUrl: './nos-categorie.component.html',
  styleUrls: ['./nos-categorie.component.scss']
})
export class NosCategorieComponent implements OnInit {
  souscategories  :  any =[];
  constructor(private produit : ProduitService) { }

  ngOnInit() {
    this.produit.getSousCategorie().subscribe(
      result=>{
       
        
          result.sort(()=> Math.random() - 0.5)

          for( var i = 0; i<8; i++){
            this.souscategories[i] =result[i].souscategorie;

        }
      }
    )
} 


}
