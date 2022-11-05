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
   categories :any ;
  constructor(private produit:ProduitService,  private router: Router,private fb: FormBuilder,
    ) {
      let formControls = {
        categorie: new FormControl('',[
          Validators.required,
        ]),
      }
  
      this.dataa = this.fb.group(formControls);
    }
    get categorie() { return this.dataa.get('categorie') }
    AddItem(){
      let assistance = this.dataa.value;
      let newCategorie = new Categorie(assistance.categorie);
      this.produit.add_categorie(newCategorie).subscribe(data =>{
      console.log("data.json(): "+data)
       })  
    }
    ngOnInit() {
      this.produit.getCategorie().subscribe(
        result=>{
          this.categories = result;  
        }
      )
    } 
}
