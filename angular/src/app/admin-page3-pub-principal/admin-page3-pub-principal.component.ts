import { Component, OnInit } from '@angular/core';
import{PubService} from '../../app/pub.service';
import { Pub } from '../pub';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-page3-pub-principal',
  templateUrl: './admin-page3-pub-principal.component.html',
  styleUrls: ['./admin-page3-pub-principal.component.scss']
})
export class AdminPage3PubPrincipalComponent implements OnInit {

  dataa :FormGroup;
  constructor(private pub:PubService,  private router: Router,private fb: FormBuilder,
    ) {
      let formControls = {
        pub_haut: new FormControl('',[
          Validators.required,
        ]),
      }
  
      this.dataa = this.fb.group(formControls);
    }
    get pub_haut() { return this.dataa.get('pub_haut') }

    AddItem(){
      let scat = this.dataa.value;
      let newPubhaut = new Pub( "1" , scat.pub_haut);
      this.pub.add_pubprincipal(newPubhaut).subscribe(data =>{
      this.router.navigate(['/' ]);
       })  
    }

    ngOnInit(): void {}   
}

