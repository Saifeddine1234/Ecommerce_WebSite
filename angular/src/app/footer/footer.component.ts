import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  categories : any  = [];
  cat : any;
  constructor(private produit : ProduitService) { }
  getbycat(cat : String){
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
        for(var i = 0 ; i <=4;i++){
          this.categories.push(result[i]);  
        }
          console.log(this.categories);
        
       
      }
    )
} 
}
