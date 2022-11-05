import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-page7-panier',
  templateUrl: './page7-panier.component.html',
  styleUrls: ['./page7-panier.component.scss']
})
export class Page7PanierComponent implements OnInit {
panier : any ;
mVide : any ;
count : any = 0;
produitpanier : any = {};
panierfinal : any = [];
panierfinal1 : any = [];
panierf : any = [];
qte : any = 1 ;
  total: any = 0;
  total_plus: any = 0;
  constructor(private produit : ProduitService , private user : UserService , private  router : Router) {
    this.panier = localStorage.getItem('produits');
    localStorage.setItem( 'produits',this.panier);
    console.log("11111111111");

   }
  

  ngOnInit(): void {
    console.log(localStorage.getItem('produits') == '' )
    console.log(localStorage.getItem('produits') ==  'null' )
    console.log(localStorage.getItem('produits') ==  null )
      if((localStorage.getItem('produits') == '') || (localStorage.getItem('produits') == 'null') || (localStorage.getItem('produits') == null)){
        this.mVide = false ;
      }else {
        this.mVide = true ;
      }


    this.panier = localStorage.getItem('produits');
    this.produitpanier = this.panier.split(",");
    console.log(this.produitpanier);
    for( var i = 0; i< this.produitpanier.length; i++){
    this.produit.getProduitByID(this.produitpanier[i]).subscribe(
      result=>{
        this.panierfinal.push(result[0]);
        this.panierfinal1.push(result[0]);
        this.count ++;
        var produitSolder = parseInt(result[0].prixProduit)   - ((parseInt(result[0].prixProduit)  * parseInt(result[0].remiseProduit)) / 100 )
        this.total = this.total + produitSolder;
        this.total_plus = this.total + 8 ;

      }
    )
  }
 
  console.log(this.count);


  console.log(this.panierfinal);
  console.log(localStorage.getItem('telephoneUser'))
  if(localStorage.getItem('telephoneUser')){
    this.user.goto(localStorage.getItem('telephoneUser')).subscribe(res => {
      console.log(res.data)
      this.user.getBytelephone(res.data).subscribe(result => {
        console.log(result);
      }
      )
      if(res && res['status'] === "ok" ){
      }else{
        console.log("err")
        this.router.navigate(['/se-connecter']);
      }
    }, (err) => {
      if(err){
      }
    })

  }

}
commander (){
  this.user.goto(localStorage.getItem('telephoneUser')).subscribe(res => {
    console.log(res.data)
    this.user.getBytelephone(res.data).subscribe(result => {
      console.log(result);
    }
    )
    if(res && res['status'] === "ok" ){
      this.router.navigate(['/Commander']);
    }else{
      console.log("err")
      this.router.navigate(['/login']);
    }
  }, (err) => {
    if(err){
      this.router.navigate(['/login']);
    }
  })
}
//sort produit dans panier
sort() {
    var changed;
    do{
        changed = false;
        for(var i=0; i < this.panierfinal.length-1; i++) {
            if(Number(this.panierfinal[i].prixProduit) < Number(this.panierfinal[i+1].prixProduit)) {
                var tmp = this.panierfinal[i];
                this.panierfinal[i] = this.panierfinal[i+1];
                this.panierfinal[i+1] = tmp;
                changed = true;
            }
        }
    } while(changed);
  }

  //delete produit dans panier
  delete(i : any){
 //   localStorage.removeItem( 'produits');
 this.panier = localStorage.getItem('produits');
 this.produitpanier = this.panier.split(",");
 this.produitpanier.splice(i,1)
 localStorage.setItem('produits' ,this.produitpanier );

    console.log(i);

  }
}
