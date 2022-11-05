import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-connect2',
  templateUrl: './connect2.component.html',
  styleUrls: ['./connect2.component.scss']
})
export class Connect2Component implements OnInit {
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
          this.router.navigate(['Commander']);
        }else{
          console.log("err")
          this.router.navigate(['/login']);
        }
      }, (err) => {
        if(err){
          this.router.navigate(['/login']);
        }
      })

    }else{         
      this.router.navigate(['/login']);


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
   this.router.navigate(['Commander'])
   
   
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
