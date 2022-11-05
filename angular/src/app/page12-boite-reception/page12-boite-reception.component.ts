import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-page12-boite-reception',
  templateUrl: './page12-boite-reception.component.html',
  styleUrls: ['./page12-boite-reception.component.scss']
})
export class Page12BoiteReceptionComponent implements OnInit {
  infoPer : any = [];
  assistance : any = [];
  constructor(private router : Router , private user : UserService) { }


  ngOnInit(): void {
    console.log(localStorage.getItem('telephoneUser'))
    if(localStorage.getItem('telephoneUser')){
      this.user.goto(localStorage.getItem('telephoneUser')).subscribe(res => {
        console.log(res.data)
        this.user.getBytelephone(res.data).subscribe(result => {
          this.infoPer = result ;
          this.user.getAssistanceByEmail(result[0].emailUser).subscribe(res => {
            for(let i = 0 ; i < res.length ;i++){
              if((res[i].ReponseAssistance) != '' ){
                this.assistance.push(res[i]);
              }
            }

          })

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
