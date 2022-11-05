import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-page11-vos-commandes',
  templateUrl: './page11-vos-commandes.component.html',
  styleUrls: ['./page11-vos-commandes.component.scss']
})
export class Page11VosCommandesComponent implements OnInit {
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
