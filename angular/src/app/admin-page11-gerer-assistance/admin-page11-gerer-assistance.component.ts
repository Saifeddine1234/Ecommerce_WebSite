import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProduitService } from '../produit.service';
import { Assistance } from '../assistance';

@Component({
  selector: 'app-admin-page11-gerer-assistance',
  templateUrl: './admin-page11-gerer-assistance.component.html',
  styleUrls: ['./admin-page11-gerer-assistance.component.scss']
})
export class AdminPage11GererAssistanceComponent implements OnInit {
 dataa : any ;
 message_select : any;
 id_select : any;
 data2 :FormGroup;

  constructor(private service : UserService , private produit:ProduitService,private fb: FormBuilder) {
          
    let fc = {
      upd_msg: new FormControl('',[
        Validators.required,
      ]),
    }

    this.data2 = this.fb.group(fc);
  
  }
  get upd_msg() { return this.data2.get('upd_msg') }
   UpdateItem(id : any){
    let updatemsg = this.data2.value;
    let newassistance = new Assistance('','' , updatemsg.upd_msg);
    this.produit.update_assistance(newassistance , id ).subscribe(data =>{

    })  
    window.location.replace("admin/gerer-assistance");

  }
  ngOnInit() {
    this.service.getAssistance().subscribe(
      result=>{
        this.dataa = result;  
        console.log(this.dataa);
      }
    )
  }
  repondre(msg : any , id : any){
    this.message_select = msg ;
    this.id_select = id;
  }
}
