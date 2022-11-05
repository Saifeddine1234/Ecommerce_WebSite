import { Component, OnInit } from '@angular/core';
import{UserService} from '../../app/user.service';
import { Assistance } from '../../app/assistance';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-discute',
  templateUrl: './discute.component.html',
  styleUrls: ['./discute.component.scss']
})
export class DiscuteComponent implements OnInit {
  dataa :FormGroup;
  constructor(private user:UserService,  private router: Router,private fb: FormBuilder,
    ) {
      let formControls = {
        emailAssistance: new FormControl('',[
          Validators.required,
        ]),
        messageAssistance: new FormControl('',[
          Validators.required,
        ]),
      }
  
      this.dataa = this.fb.group(formControls);
    }
    get emailAssistance() { return this.dataa.get('emailAssistance') }
    get messageAssistance() { return this.dataa.get('messageAssistance') }
    AddItem(){
      let assistance = this.dataa.value;
      let newAssistance = new Assistance(assistance.emailAssistance,assistance.messageAssistance);
      this.user.add_assistance(newAssistance).subscribe(data =>{
      console.log("data.json(): "+data)
      this.router.navigate(['/']);
       })  
    }
    ngOnInit(): void {}      
}
