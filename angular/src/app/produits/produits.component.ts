import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../produit.service';
export let browserRefresh = false;
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
  url : any ;
  addTermForm : any ;
  produits  :  any =[];
  cartproduit  :  any =[];
  panier  :  any =[];
  myItem : any  =[];
  cc : any  =[];
  form: FormGroup;
  s : any = false ;
  saif : any =  [];
  imagemarques : any = [];
  //On check Box marque
 
  constructor(private produit : ProduitService , private route: ActivatedRoute ,private fb: FormBuilder) {
    //check for Navigation Timing API support
if (window.performance)
{
  console.info("window.performance works fine on this browser");
}
console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD)
{
  console.info( "This page is reloaded" );
} else
{
  console.info( "This page is not reloaded");
}
this.panier = localStorage.getItem('produits');
console.log(this.panier);
this.form = fb.group({
  selectedCountries:  new FormArray([])
 });
}
onCheckboxChange(event: any) {
  const selectedCountries = (this.form.controls['selectedCountries'] as FormArray);
  if (event.target.checked) {
    selectedCountries.push(new FormControl(event.target.value));
  } else {
    const index = selectedCountries.controls
    .findIndex(x => x.value === event.target.value);
    selectedCountries.removeAt(index);
  }
  var selected = selectedCountries.value;
  console.log(selected);
  this.url = this.route.snapshot.params['cat'];
  if(selected.length == 0)
  {
    console.log("not checked")
    if(this.url){
      this.produit.getByCategorie(this.url).subscribe(
      result=>{
        this.produits = [];
        for( var i = 0; i< result.length; i++){
          var produitSolder = parseInt(result[i].prixProduit)   - ((parseInt(result[i].prixProduit)  * parseInt(result[i].remiseProduit)) / 100 )
          if( produitSolder == result[i].prixProduit  )
          {
            this.produits.push({ID : result[i]._id , nomProduit : result[i].nomProduit,  prixSolder : produitSolder ,  prixProduit : '.' });
          }else
          {
            this.produits.push({ID : result[i]._id , nomProduit : result[i].nomProduit , prixSolder : produitSolder ,  prixProduit : result[i].prixProduit + ' DT'});
          }
        }
      }
    )
    }else{
      this.produit.getProduit().subscribe(
        result=>{
          this.produits = [];
          for( var i = 0; i< result.length; i++){
            var produitSolder = parseInt(result[i].prixProduit)   - ((parseInt(result[i].prixProduit)  * parseInt(result[i].remiseProduit)) / 100 )
            if( produitSolder == result[i].prixProduit  )
            {
              this.produits.push({ID : result[i]._id , nomProduit : result[i].nomProduit,  prixSolder : produitSolder ,  prixProduit : '.' });
            }else
            {
              this.produits.push({ID : result[i]._id , nomProduit : result[i].nomProduit , prixSolder : produitSolder ,  prixProduit : result[i].prixProduit + ' DT'});
            }
          }
        }
      )
    }
  }else
  {
    if(this.url){
      this.produit.getByCategorie(this.url).subscribe(
        result=>{
          this.produits = [];
          for( var i = 0; i< result.length; i++){
            var produitSolder = parseInt(result[i].prixProduit)   - ((parseInt(result[i].prixProduit)  * parseInt(result[i].remiseProduit)) / 100 )
            for( var j = 0; j< selected.length; j++)
            {
              if(result[i].marque == selected[j])
              {
                if( produitSolder == result[i].prixProduit )
                  {
                  this.produits.push({ID : result[i]._id , nomProduit : result[i].nomProduit,  prixSolder : produitSolder ,  prixProduit : '.' });
                }else
                {
                  this.produits.push({ID : result[i]._id , nomProduit : result[i].nomProduit , prixSolder : produitSolder ,  prixProduit : result[i].prixProduit + ' DT'});
                }
              }
            }
          }
        }
      )
    }else
    {
      this.produit.getProduit().subscribe(
        result=>{
          this.produits = [];
          for( var i = 0; i< result.length; i++){
            var produitSolder = parseInt(result[i].prixProduit)   - ((parseInt(result[i].prixProduit)  * parseInt(result[i].remiseProduit)) / 100 )
            for( var j = 0; j< selected.length; j++)
            {
              if(result[i].marque == selected[j])
              {
                if( produitSolder == result[i].prixProduit )
                  {
                  this.produits.push({ID : result[i]._id , nomProduit : result[i].nomProduit,  prixSolder : produitSolder ,  prixProduit : '.' });
                }else
                {
                  this.produits.push({ID : result[i]._id , nomProduit : result[i].nomProduit , prixSolder : produitSolder ,  prixProduit : result[i].prixProduit + ' DT'});
                }
              }
            }
          }
        }
      )
    }
  }
}
  ngOnInit() {
    this.url = this.route.snapshot.params['cat'];
    if(this.url){
      this.produit.getByCategorie(this.url).subscribe(
        result=>{
          console.log(result);
          for( var i = 0; i< result.length; i++){
            var produitSolder = parseInt(result[i].prixProduit)   - ((parseInt(result[i].prixProduit)  * parseInt(result[i].remiseProduit)) / 100 )
            if( produitSolder == result[i].prixProduit ){
              this.produits[i] = {ID : result[i]._id , nomProduit : result[i].nomProduit,  prixSolder : produitSolder ,  prixProduit : '.' }
            }else{
              this.produits[i] = {ID : result[i]._id , nomProduit : result[i].nomProduit , prixSolder : produitSolder ,  prixProduit : result[i].prixProduit + ' DT'}
            }
          }
        }
      )
    }else{
      this.produit.getProduit().subscribe(
        result=>{
          console.log(result);
          for( var i = 0; i< result.length; i++){
            var produitSolder = parseInt(result[i].prixProduit)   - ((parseInt(result[i].prixProduit)  * parseInt(result[i].remiseProduit)) / 100 )
            if( produitSolder == result[i].prixProduit ){
              this.produits[i] = {ID : result[i]._id ,  nomProduit : result[i].nomProduit,  prixSolder : produitSolder ,  prixProduit : '.' }
            }else{
              this.produits[i] = {ID : result[i]._id , nomProduit : result[i].nomProduit , prixSolder : produitSolder ,  prixProduit : result[i].prixProduit  + ' DT' }
            }
          }
        }
      )
    }
    console.log(this.produits);

    //Get Marque
    this.url = this.route.snapshot.params['cat'];
    console.log(this.url)
    if(this.url != null){
      this.produit.getByCategorie(this.url).subscribe(
        result=>{
          result.sort(()=> Math.random() - 0.5)
          for( var i = 0; i<result.length; i++){
            this.imagemarques[i] = result[i].marque ;
          }
          this.imagemarques = this.imagemarques.filter(function(elem : any , index  : any , self  : any ) {
          return index === self.indexOf(elem);
        })
        console.log(this.imagemarques)
      }
        
    )
  }else
  {
    
    this.produit.getProduit().subscribe(
      result=>{
        console.log(result);
        result.sort(()=> Math.random() - 0.5)
        for( var i = 0; i<result.length; i++){
          this.imagemarques.push(result[i].marque);
        }
          this.imagemarques = this.imagemarques.filter(function(elem : any , index  : any , self  : any ) {
            return index === self.indexOf(elem);
          }
        )
      }
    )
  }
  console.log(this.saif);
}
 
  additem(cartproduit : any){
   console.log(cartproduit)
    this.panier = localStorage.getItem('produits');
    if(this.panier == null){
      this.cc.push(cartproduit.ID)
      localStorage.setItem( 'produits',this.cc);
      console.log('errrrrreeeeuuuuur')
    }else{
      if(performance.navigation.type == 0)
      {
        this.cc.push(cartproduit.ID)
        localStorage.setItem( 'produits',this.cc);
        console.log(localStorage.getItem('produits'));
        this.panier = localStorage.getItem('produits');
      }
      else
      {
        if(this.s !== true)
        {
          this.s = true;
          this.panier = localStorage.getItem('produits');
          console.log(this.panier);
          this.cc.push(this.panier.split(","));
          localStorage.setItem( 'produits',this.cc);
        }
          this.cc.push(cartproduit.ID);
          localStorage.setItem( 'produits',this.cc);
          console.log(localStorage.getItem('produits'));
          this.panier = localStorage.getItem('produits');
           
   
      }
    }


  }

}
