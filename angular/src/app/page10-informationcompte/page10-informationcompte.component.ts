import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-page10-informationcompte',
  templateUrl: './page10-informationcompte.component.html',
  styleUrls: ['./page10-informationcompte.component.scss']
})
export class Page10InformationcompteComponent implements OnInit {
  infoPer : any = [];
  constructor(private router : Router , private user : UserService) { }

  ngOnInit(): void {
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
  deconnexion(){
    if(confirm("Deconnecté du compte ? ")) {
    localStorage.removeItem('telephoneUser');
    }
  }
}
