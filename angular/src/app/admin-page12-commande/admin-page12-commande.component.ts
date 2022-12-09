import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-admin-page12-commande',
  templateUrl: './admin-page12-commande.component.html',
  styleUrls: ['./admin-page12-commande.component.scss']
})
export class AdminPage12CommandeComponent implements OnInit {
  infoCommande : any = [];
  infoPer : any = []
  constructor( private produits : ProduitService , private router : Router , private user : UserService ) { }
  ngOnInit(): void {
    console.log(localStorage.getItem('telephoneUser'))
    if(localStorage.getItem('telephoneUser')){
      this.user.goto(localStorage.getItem('telephoneUser')).subscribe(res => {
        console.log(res.data)
        this.produits.getCommandeByTel(res.data).subscribe(result => {
          console.log(result);
          this.infoCommande = result ;
        }
        )
        this.user.getBytelephone(res.data).subscribe(result => {
          console.log(result);
          this.infoPer = result ;
        })
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
  deconnexion(){
    if(confirm("Deconnecté du compte ? ")) {
    localStorage.removeItem('telephoneUser');
    }
  }
}
