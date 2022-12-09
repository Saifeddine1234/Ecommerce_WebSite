import { Component, OnInit } from '@angular/core';
import{ProduitService} from '../../app/produit.service';
import { Categorie } from '../../app/categorie';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-page7-gerer-cat',
  templateUrl: './admin-page7-gerer-cat.component.html',
  styleUrls: ['./admin-page7-gerer-cat.component.scss']
})
export class AdminPage7GererCatComponent implements OnInit {

  dataa :FormGroup;
  data2 : FormGroup;
   categories :any ;
   affiche_modifier :any = 0 ;
   categorie_select : any;
   id_select : any ;
  constructor(private produit:ProduitService,  private router: Router,private fb: FormBuilder,
    ) {
      let formControls = {
        categorie: new FormControl('',[
          Validators.required,
        ]),
      }
  
      this.dataa = this.fb.group(formControls);

      let fc = {
        upd_categorie: new FormControl('',[
          Validators.required,
        ]),
      }
  
      this.data2 = this.fb.group(fc);
    }
    get upd_categorie() { return this.data2.get('upd_categorie') }
    AddItem(){
      let assistance = this.dataa.value;
      let newCategorie = new Categorie(assistance.categorie);
      this.produit.add_categorie(newCategorie).subscribe(data =>{
      console.log("data.json(): "+data)
       })
       window.location.replace("admin/gerer-categorie");
  
    }

    UpdateItem(id : any , cat : any){
      let updatecat = this.data2.value;
      let newCategorie = new Categorie(updatecat.upd_categorie);
      this.produit.update_categorie(newCategorie , id , cat).subscribe(data =>{

      })  
      window.location.replace("admin/gerer-categorie");

    }
    ngOnInit() {
      this.produit.getCategorie().subscribe(
        result=>{
          this.categories = result;  
        }
      )
    }
    affiche_m(){
      this.affiche_modifier = 1;
    } 
    modifier(cat : any , id : any){
      this.categorie_select = cat ;
      this.id_select = id;
      console.log(this.id_select);
    }
    spprimer(id : any, cat : any){
      if(confirm('Are you sure to delete this categorie')){
      this.produit.spprimer_categorie(id,cat).subscribe(data =>{})
      window.location.replace("admin/gerer-categorie");
      }
    }
 
}
