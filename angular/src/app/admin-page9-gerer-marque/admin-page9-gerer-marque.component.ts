import { Component, OnInit } from '@angular/core';
import{ProduitService} from '../../app/produit.service';
import { Marque } from '../../app/marque';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-page9-gerer-marque',
  templateUrl: './admin-page9-gerer-marque.component.html',
  styleUrls: ['./admin-page9-gerer-marque.component.scss']
})
export class AdminPage9GererMarqueComponent implements OnInit {
  marques : any;
  dataa :FormGroup;
  data2 :FormGroup;
  marque_select : any;
  id_select : any;
  constructor(private produit:ProduitService,  private router: Router,private fb: FormBuilder,
    ) {
      let formControls = {
        marque: new FormControl('',[
          Validators.required,
        ]),
        imagemarque: new FormControl('',[
          Validators.required,
        ]),
      }
  
      this.dataa = this.fb.group(formControls);
         
      let fc = {
        upd_marque: new FormControl('',[
          Validators.required,
        ]),
      }
  
      this.data2 = this.fb.group(fc);
    
    }
    get upd_marque() { return this.data2.get('upd_marque') }

    get marque() { return this.dataa.get('marque') }
    get imagemarque() { return this.dataa.get('imagemarque') }
    AddItem(){
      let marq = this.dataa.value;
      let newMarque = new Marque(marq.marque , marq.imagemarque);
      this.produit.add_marque(newMarque).subscribe(data =>{
       })  
       window.location.replace("admin/gerer-marque");


    }
    UpdateItem(id : any , maque : any){
      let updatemarque = this.data2.value;
      let newMarque = new Marque(updatemarque.upd_marque);
      this.produit.update_marque(newMarque , id , maque).subscribe(data =>{

      })  
      window.location.replace("admin/gerer-marque");
    }
    ngOnInit() {
      this.produit.getMarque().subscribe(
        result=>{
          this.marques = result;  
        }
      )
    }   
    modifier(marque : any , id : any){
      this.marque_select = marque ;
      this.id_select = id;
      console.log(this.id_select);
    }
    spprimer(id : any, maque : any){
      if(confirm('Are you sure to delete this sous categorie')){
      this.produit.spprimer_marque(id,maque).subscribe(data =>{})
      window.location.replace("admin/gerer-marque");
      }
    }
}
