import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-sous-categorie',
  templateUrl: './list-sous-categorie.component.html',
  styleUrls: ['./list-sous-categorie.component.scss']
})
export class ListSousCategorieComponent implements OnInit {
  souscategories  :  any =[];
  constructor(private produit : ProduitService , private route: ActivatedRoute) { }
  
ngOnInit() {
  this.produit.getSousCatbycat(this.route.snapshot.params['cat']).subscribe(
    result=>{
      result.sort(()=> Math.random() - 0.5)
      console.log(result);
      for( var i = 0; i<6; i++){
        var imsouscategorie = result[i].imagesouscategorie.replace('C:\\fakepath\\','');
        this.souscategories[i] = { souscategorie : result[i].souscategorie,  imagesouscategorie : imsouscategorie}
    }
    }
  )
 // console.log(this.route.snapshot.params.user_id);
} 

}
