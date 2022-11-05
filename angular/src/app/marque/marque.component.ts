import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.scss']
})
export class MarqueComponent implements OnInit {
    imagemarques : any = [];
  constructor(private produit : ProduitService) { }

  ngOnInit() {
    this.produit.getMarque().subscribe(
      result=>{
        result.sort(()=> Math.random() - 0.5)
        console.log(result);
        for( var i = 0; i<8; i++){
          var imagemarque = result[i].imagemarque.replace('C:\\fakepath\\','');
          this.imagemarques[i] = { marque : result[i].marque,  imagemarque : imagemarque}
      }
      }
    )
   // console.log(this.route.snapshot.params.user_id);
  } 

}
