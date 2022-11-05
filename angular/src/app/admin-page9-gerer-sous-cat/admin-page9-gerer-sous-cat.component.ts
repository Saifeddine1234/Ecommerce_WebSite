import { Component, OnInit } from '@angular/core';
import{ProduitService} from '../../app/produit.service';
import { SousCategorie } from '../../app/souscategorie';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-page9-gerer-sous-cat',
  templateUrl: './admin-page9-gerer-sous-cat.component.html',
  styleUrls: ['./admin-page9-gerer-sous-cat.component.scss']
})
export class AdminPage9GererSousCatComponent implements OnInit {
  categories : any;
  scategories : any;
  dataa :FormGroup;
  constructor(private produit:ProduitService,  private router: Router,private fb: FormBuilder,
    ) {
      let formControls = {
        categorie: new FormControl('',[
          Validators.required,
        ]),
        souscategorie: new FormControl('',[
          Validators.required,
        ]),
        imagesouscategorie: new FormControl('',[
          Validators.required,
        ]),
      }
  
      this.dataa = this.fb.group(formControls);
    }
    get categorie() { return this.dataa.get('categorie') }
    get souscategorie() { return this.dataa.get('souscategorie') }
    get imagesouscategorie() { return this.dataa.get('imagesouscategorie') }

    AddItem(){
      let scat = this.dataa.value;
      let newsCategorie = new SousCategorie(scat.categorie , scat.souscategorie , scat.imagesouscategorie);
      this.produit.add_sous_categorie(newsCategorie).subscribe(data =>{
      this.router.navigate(['/']);
       })  
    }
    ngOnInit() {
        this.produit.getCategorie().subscribe(
          result=>{
            this.categories = result;  
          }
        )
    
      this.produit.getSousCategorie().subscribe(
        result=>{
          this.scategories = result;  
        }
      )
    } 
}
