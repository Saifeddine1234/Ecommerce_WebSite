import { Component, OnInit } from '@angular/core';
import{PubService} from '../../app/pub.service';
import { Pub } from '../pub';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-page5-pub-milieu',
  templateUrl: './admin-page5-pub-milieu.component.html',
  styleUrls: ['./admin-page5-pub-milieu.component.scss']
})
export class AdminPage5PubMilieuComponent implements OnInit {
  pubmilieu : any ;
  m1 : any ;
  m2 : any ;
  m3 : any ;
  m4 : any ;
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
      let newPubhaut = new Pub( "m1" , scat.pub_haut);
      this.pub.add_pubmilieur(newPubhaut).subscribe(data =>{
      this.router.navigate(['/' ]);
       })  
    }
    AddItem2(){
      let scat = this.dataa.value;
      let newPubhaut = new Pub( "m2" , scat.pub_haut);
      this.pub.add_pubmilieur(newPubhaut).subscribe(data =>{
      this.router.navigate(['/' ]);
       })  
    }
    AddItem3(){
      let scat = this.dataa.value;
      let newPubhaut = new Pub( "m3" , scat.pub_haut);
      this.pub.add_pubmilieur(newPubhaut).subscribe(data =>{
      this.router.navigate(['/' ]);
       })  
    }
    AddItem4(){
      let scat = this.dataa.value;
      let newPubhaut = new Pub( "m4" , scat.pub_haut);
      this.pub.add_pubmilieur(newPubhaut).subscribe(data =>{
      this.router.navigate(['/' ]);
       })  
    }


    ngOnInit() {
      this.pub.getpub().subscribe(
        result=>{
          this.pubmilieu = result; 
          for( let i of this.pubmilieu){
            if(i.numPub == "m1"){
              this.m1 = i.pubHaut ;
            }
            if(i.numPub == "m2"){
              this.m2 = i.pubHaut ;
            }
            if(i.numPub == "m3"){
              this.m3 = i.pubHaut ;
            }
            if(i.numPub == "m4"){
              this.m4 = i.pubHaut ;
            }
          }
        }
      )
    }}


