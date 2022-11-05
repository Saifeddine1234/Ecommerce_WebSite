import { Component, OnInit } from '@angular/core';
import{ProduitService} from '../../app/produit.service';
import { Produit } from '../../app/produit';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-page8-gerer-produit',
  templateUrl: './admin-page8-gerer-produit.component.html',
  styleUrls: ['./admin-page8-gerer-produit.component.scss']
})
export class AdminPage8GererProduitComponent implements OnInit {
  msouscategorie : any ;
  mmarque : any ;
  produits : any ;
  dataa :FormGroup;
  categoriebyscat : any ;
  constructor(private produit:ProduitService,  private router: Router,private fb: FormBuilder,
    ) {
      let formControls = {
        nomProduit: new FormControl('',[
          Validators.required,
        ]),
        prixProduit: new FormControl('',[
          Validators.required,
        ]),
        remiseProduit: new FormControl('',[
          Validators.required,
        ]),
        imageProduit: new FormControl('',[
          Validators.required,
        ]),
        categorie: new FormControl('',[
          Validators.required,
        ]),
        souscategorie: new FormControl('',[
          Validators.required,
        ]),
        marque: new FormControl('',[
          Validators.required,
        ]),
        venteFlash: new FormControl('',[
          Validators.required,
        ]),
      }
  
      this.dataa = this.fb.group(formControls);
    }
    
    get nomProduit() { return this.dataa.get('nomProduit') }
    get prixProduit() { return this.dataa.get('prixProduit') }
    get remiseProduit() { return this.dataa.get('remiseProduit') }
    get imageProduit() { return this.dataa.get('imageProduit') }
    get souscategorie() { return this.dataa.get('souscategorie') }
    get marque() { return this.dataa.get('marque') }
    get venteFlash() { return this.dataa.get('venteFlash') }

   // get categorie() { return 'dd'  }

    AddItem(){
      let scat = this.dataa.value;
      this.produit.getCategoriebySouscat(scat.souscategorie).subscribe(
        result=>{
          this.categoriebyscat = result[0].categorie;
          let newProduit = new Produit(scat.nomProduit , scat.prixProduit , scat.remiseProduit , scat.imageProduit , this.categoriebyscat  , scat.souscategorie , scat.marque , scat.venteFlash);
          this.produit.add_produit(newProduit).subscribe(data =>{
          this.router.navigate(['/']);
       })  
        }
      )

    }
    ngOnInit() {
      
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
      this.produit.getProduit().subscribe(
        result=>{
          this.produits = result;  
        }
      )
    }
   }

