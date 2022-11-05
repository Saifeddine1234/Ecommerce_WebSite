import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-connecte',
  templateUrl: './connecte.component.html',
  styleUrls: ['./connecte.component.scss']
})
export class ConnecteComponent implements OnInit {
  formGroup : any;
  alert : any ;
   constructor( private projet : UserService , private router : Router) { }

  ngOnInit(): void {
    this.initForm();

    console.log(localStorage.getItem('telephoneUser'))
    if(localStorage.getItem('telephoneUser')){
      this.projet.goto(localStorage.getItem('telephoneUser')).subscribe(res => {
        console.log(res)
        if(res && res['status'] === "ok" ){
          this.router.navigate(['/']);
        }else{
          console.log("err")
          this.router.navigate(['/se-connecter']);
        }
      }, (err) => {
        if(err){
          this.router.navigate(['/se-connecter']);
        }
      })

    }else{         
      this.router.navigate(['/se-connecter']);


    }
  }

  initForm(){
    this.formGroup = new FormGroup(
      {
        telephoneUser : new FormControl('',[Validators.required]),
        mdpUser : new FormControl('',[Validators.required])
      }
    )

  }
  loginProcess(){
    if(this.formGroup.valid){
      this.projet.login(this.formGroup.value).subscribe(res => {
      this.alert = res.data ;

        if(res && res['status'] === 'ok' && res['loginUser'] ) {

           console.log(res['status'])
           localStorage.setItem('telephoneUser' , res['data'])
   this.router.navigate(['/'])
   
   
   } else {
         console.log('Not valid user')
         this.router.navigate(['/login'])

   }
   } , (err) => {
         if(err) {
            console.log('Error is ' , err)
            this.router.navigate(['/login'])

         }
   })
    }
  }

}
