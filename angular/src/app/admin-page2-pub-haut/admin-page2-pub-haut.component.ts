import { Component, OnInit } from '@angular/core';
import{PubService} from '../../app/pub.service';
import { Pub } from '../pub';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-page2-pub-haut',
  templateUrl: './admin-page2-pub-haut.component.html',
  styleUrls: ['./admin-page2-pub-haut.component.scss']
})
export class AdminPage2PubHautComponent implements OnInit {
  pub1 : any ;
  pubA : any ;
  pubB : any ;
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

    AddItem1(){
      let scat = this.dataa.value;
      let newPubhaut = new Pub( "1" , scat.pub_haut);
      this.pub.add_pubhaut(newPubhaut).subscribe(data =>{
      this.router.navigate(['/']);
       })  
    }
    AddItem2(){
      let scat = this.dataa.value;
      let newPubhaut = new Pub( "2" , scat.pub_haut);
      this.pub.add_pubhaut(newPubhaut).subscribe(data =>{
      this.router.navigate(['/']);
       })  
    }
    ngOnInit() {
      this.pub.getpub().subscribe(
        result=>{
          this.pub1 = result; 
          for( let i of this.pub1){
            if(i.numPub == "1"){
              this.pubA = i.pubHaut ;
            }
            if(i.numPub == "2"){
              this.pubB = i.pubHaut ;
            }
          }
        }
      )
    }
}
