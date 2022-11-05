import { Component, OnInit } from '@angular/core';
import{PubService} from '../../app/pub.service';
import { Pub } from '../pub';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-page4-pub-droite',
  templateUrl: './admin-page4-pub-droite.component.html',
  styleUrls: ['./admin-page4-pub-droite.component.scss']
})
export class AdminPage4PubDroiteComponent implements OnInit {
  pubdroit : any ;
  d1 : any;
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
      this.pub.add_pubdroit(newPubhaut).subscribe(data =>{
      this.router.navigate(['/' ]);
       })  
    }

    ngOnInit() {
      this.pub.getpub().subscribe(
        result=>{
          this.pubdroit = result; 
          for( let i of this.pubdroit){
            if(i.numPub == "m1"){
              this.d1 = i.pubHaut ;
            }
          }
        }
      )
    }}

