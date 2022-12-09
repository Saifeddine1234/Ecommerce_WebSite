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
  sous_categorie_select : any ;
  id_select :   any ;
  dataa :FormGroup;
  data2 :FormGroup;

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
      
      let fc = {
        upd_sous_categorie: new FormControl('',[
          Validators.required,
        ]),
      }
  
      this.data2 = this.fb.group(fc);
    
    }
    get upd_sous_categorie() { return this.data2.get('upd_sous_categorie') }

    get categorie() { return this.dataa.get('categorie') }
    get souscategorie() { return this.dataa.get('souscategorie') }
    get imagesouscategorie() { return this.dataa.get('imagesouscategorie') }



    
    AddItem(){
      let scat = this.dataa.value;
      let newsCategorie = new SousCategorie(scat.categorie , scat.souscategorie , scat.imagesouscategorie);
      this.produit.add_sous_categorie(newsCategorie).subscribe(data =>{
       })  
       window.location.replace("admin/gerer-sous-categorie");
      }
    UpdateItem(id : any , souscat : any){
      let updatesouscat = this.data2.value;
      let newSousCategorie = new SousCategorie('' , updatesouscat.upd_sous_categorie);
      this.produit.update_sous_categorie(newSousCategorie , id , souscat).subscribe(data =>{

      })  
      window.location.replace("admin/gerer-sous-categorie");

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
    modifier(souscat : any , id : any){
      this.sous_categorie_select = souscat ;
      this.id_select = id;
      console.log(this.id_select);
    }
    spprimer(id : any, souscat : any){
      if(confirm('Are you sure to delete this sous categorie')){
      this.produit.spprimer_sous_categorie(id,souscat).subscribe(data =>{})
      window.location.replace("admin/gerer-sous-categorie");
      }
    }
}
