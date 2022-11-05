import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { UserService } from '../user.service';
import {Commande} from '../../app/commande';

@Component({
  selector: 'app-page15-commander',
  templateUrl: './page15-commander.component.html',
  styleUrls: ['./page15-commander.component.scss']
})
export class Page15CommanderComponent implements OnInit {
panier : any ;
count : any = 0;
payer : any = 0 ;
produitpanier : any = {};
panierfinal : any = [];
panierfinal1 : any = [];
panierf : any = [];
infoPer : any = [];
qte : any = 1 ;
  total: any = 0;
  total_plus: any = 0;
  constructor(private produit : ProduitService , private user : UserService ,private router : Router) {
    this.panier = localStorage.getItem('produits');
    localStorage.setItem( 'produits',this.panier);
 
   }
  

  ngOnInit(): void {

    this.panier = localStorage.getItem('produits');
    this.produitpanier = this.panier.split(",");
    console.log(this.produitpanier);
    if((localStorage.getItem('produits') == '') || (localStorage.getItem('produits') == 'null') || (localStorage.getItem('produits') == null)){
      this.router.navigate(['/']);
    }
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
  console.log(localStorage.getItem('telephoneUser'))
  if(localStorage.getItem('telephoneUser')){
    this.user.goto(localStorage.getItem('telephoneUser')).subscribe(res => {
      console.log(res.data)
      this.user.getBytelephone(res.data).subscribe(result => {
        console.log(result);
        this.infoPer = result ;

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
payer_liv(){
  this.payer = 0 ;
  }
  payer_cart(){
  this.payer = 1 ;
  }
  deconnexion(){
    if(confirm("Deconnecté du compte ? ")) {
    localStorage.removeItem('telephoneUser');
    }
  }
AddCommande(){
  if(confirm(" Passer la commande ? ")) {
  if(localStorage.getItem('telephoneUser')){
    this.user.goto(localStorage.getItem('telephoneUser')).subscribe(res => {
      console.log(res.data)
      this.user.getBytelephone(res.data).subscribe(result => {
        console.log(result);
        this.infoPer = result ;
        console.log(this.infoPer)
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
  console.log(this.panierfinal1)
  let newCommande = new Commande(this.total,this.infoPer[0].nomUser , this.infoPer[0].prenomUser , this.infoPer[0].emailUser ,
  this.infoPer[0].telephoneUser , this.infoPer[0].adresseUser , this.panierfinal1, this.payer );
  console.log(newCommande)
  this.produit.add_commande(newCommande).subscribe(data =>{
  console.log("data.json(): "+data)
  this.router.navigate(['/panier']);
   }) 
   localStorage.removeItem('produits');
 
}
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
