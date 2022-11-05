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
    }
    get marque() { return this.dataa.get('marque') }
    get imagemarque() { return this.dataa.get('imagemarque') }
    AddItem(){
      let marq = this.dataa.value;
      let newMarque = new Marque(marq.marque , marq.imagemarque);
      this.produit.add_marque(newMarque).subscribe(data =>{
      this.router.navigate(['/']);
       })  
    }
    ngOnInit() {
      this.produit.getMarque().subscribe(
        result=>{
          this.marques = result;  
        }
      )
    }   
}
