import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-admin-detail-produit',
  templateUrl: './admin-detail-produit.component.html',
  styleUrls: ['./admin-detail-produit.component.scss']
})
export class AdminDetailProduitComponent implements OnInit {
url : any ;
msouscategorie : any ;
mmarque : any ;
produits : any ;
data2 :FormGroup;
categoriebyscat : any ;
produitSolder : any ;
constructor(private produit:ProduitService,private route : ActivatedRoute ,  private router: Router,private fb: FormBuilder,
  ) {
    let formControls = {
      unomProduit: new FormControl('',[
        Validators.required,
      ]),
      uprixProduit: new FormControl('',[
        Validators.required,
      ]),
      uremiseProduit: new FormControl('',[
        Validators.required,
      ]),
   
  
      usouscategorie: new FormControl('',[
        Validators.required,
      ]),
      umarque: new FormControl('',[
        Validators.required,
      ]),
   //   venteFlash: new FormControl('',[
    //    Validators.required,
    //  ]),
    }

    this.data2 = this.fb.group(formControls);
  }
  
  get unomProduit() { return this.data2.get('unomProduit') }
  get uprixProduit() { return this.data2.get('uprixProduit') }
  get uremiseProduit() { return this.data2.get('uremiseProduit') }
  get usouscategorie() { return this.data2.get('usouscategorie') }
  get umarque() { return this.data2.get('umarque') }
 // get venteFlash() { return this.data2.get('venteFlash') }
 VFItem(id : any ){
  let scat = this.data2.value;

        let newProduit = new Produit("" , "" , scat.uremiseProduit , "" , ""  , "" , "" ,"true",id);
        this.produit.update_produit(newProduit).subscribe(data =>{
      }
      )
  window.location.replace("admin/detail-produit/"+id);

}
  UpdateItem(id : any , souscat : any){
    console.log(souscat);
    let scat = this.data2.value;
    if(scat.usouscategorie == ""){
      this.produit.getCategoriebySouscat(souscat).subscribe(
        result=>{
          this.categoriebyscat = result[0].categorie;
          let newProduit = new Produit(scat.unomProduit , scat.uprixProduit , scat.uremiseProduit , "" , this.categoriebyscat  , scat.usouscategorie , scat.umarque ,"",id);
          this.produit.update_produit(newProduit).subscribe(data =>{
        }
        )
      })
    }else{
      this.produit.getCategoriebySouscat(scat.usouscategorie).subscribe(
        result=>{
          this.categoriebyscat = result[0].categorie;
          let newProduit = new Produit(scat.unomProduit , scat.uprixProduit , scat.uremiseProduit , "" , this.categoriebyscat  , scat.usouscategorie , scat.umarque ,"",id);
          this.produit.update_produit(newProduit).subscribe(data =>{
        }
        )
      })
    }
  
 
    window.location.replace("admin/detail-produit/"+id);

  }
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
    this.produit.getSousCategorie().subscribe(
      result=>{
        this.msouscategorie = result;  
      }
    )
    this.produit.getMarque().subscribe(
      result=>{
        this.mmarque = result;  
      }
    )
  } 
  desactiveVF(id : any){
console.log("desc");

let newProduit = new Produit("" , "" ,"" , "" , ""  , "" , "" ,"false",id);
this.produit.update_produit(newProduit).subscribe(data =>{
}
)
window.location.replace("admin/detail-produit/"+id);
  }
  activeVF(id : any){
    console.log("act");
    let newProduit = new Produit("" , "" ,"" , "" , ""  , "" , "" ,"true",id);
    this.produit.update_produit(newProduit).subscribe(data =>{
    }
    )
    window.location.replace("admin/detail-produit/"+id);
  }

}
