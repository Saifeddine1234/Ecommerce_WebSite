import { Component, OnInit } from '@angular/core';
import{UserService} from '../../app/user.service';
import { User } from '../../app/user';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-cree-compte',
  templateUrl: './cree-compte.component.html',
  styleUrls: ['./cree-compte.component.scss']
})
export class CreeCompteComponent implements OnInit {
  dataa :FormGroup;
  constructor(private user:UserService,  private router: Router,private fb: FormBuilder,
    ) {
      let formControls = {
        nomUser: new FormControl('',[
          Validators.required,
          Validators.pattern("[A-Za-z .'-]+"),
          Validators.minLength(2)
        ]),
        prenomUser: new FormControl('',[
          Validators.required,
        ]),
        emailUser: new FormControl('',[
          Validators.required,
        ]),
        telephoneUser: new FormControl('',[
          Validators.required,
        ]),
        mdpUser: new FormControl('',[
          Validators.required,
          Validators.minLength(6)
        ]),
        adresseUser: new FormControl('',[
          Validators.required,
        ]),
      }
  
      this.dataa = this.fb.group(formControls);
    }
    get nomUser() { return this.dataa.get('nomUser') }
    get prenomUser() { return this.dataa.get('prenomUser') }
    get emailUser() { return this.dataa.get('emailUser') }
    get telephoneUser() { return this.dataa.get('telephoneUser') }
    get mdpUser() { return this.dataa.get('mdpUser') }
    get adresseUser() { return this.dataa.get('adresseUser') }

    
    AddItem(){
      let user = this.dataa.value;
      let newUser = new User(user.nomUser, user.prenomUser,user.emailUser,user.adresseUser , user.telephoneUser,user.mdpUser);
      this.user.add_user(newUser).subscribe(data =>{
      console.log("data.json(): "+data)
      this.router.navigate(['/se-connecter']);
       })  
    }
    ngOnInit(): void {
      console.log(localStorage.getItem('telephoneUser'))
      if(localStorage.getItem('telephoneUser')){
        this.user.goto(localStorage.getItem('telephoneUser')).subscribe(res => {
          console.log(res)
          if(res && res['status'] === "ok" ){
            this.router.navigate(['/']);
          }else{
            console.log("err")
            this.router.navigate(['/se-connecter']);
          }
        }, (err) => {
          if(err){
          }
        })
  
      }else{         
  
  
      }
    }      
}