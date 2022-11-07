import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,Subscription, interval  } from 'rxjs';
import { UserService } from '../user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
mLogin : any  ;
panier : any ;
count : any =0 ;
isCollapsed : any = true;
produitpanier : any = [];
  updateSubscription: any;
  constructor(private router: Router , private user : UserService){
  
  }
  deconnexion(){
    if(confirm("Are you sure to Logout ? ")) {
    localStorage.removeItem('telephoneUser');
    }
  }
  ngOnInit(): void {
    this.updateSubscription = interval(10).subscribe(
      (val) =>{
        this.panier = localStorage.getItem('produits');
        if(this.panier == "null" || this.panier == ""){
          this.count = 0;
        }else{
          this.produitpanier = this.panier.split(",").sort();
          this.count = this.produitpanier.length;
        }

      })

    
        console.log(localStorage.getItem('telephoneUser'))
        if(localStorage.getItem('telephoneUser')){
          this.user.goto(localStorage.getItem('telephoneUser')).subscribe(res => {
            console.log(res)
            if(res && res['status'] === "ok" ){
              this.mLogin = true ;
            }else{
              console.log("err")
              this.mLogin = false ;
            }
          }, (err) => {
            if(err){
              this.mLogin = false ;
    
            }
    
          })
    
        }else{         
             this.mLogin = false ;


        }
        console.log(this.mLogin);
    
    
    
  };

}
