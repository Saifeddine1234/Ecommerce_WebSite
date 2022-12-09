import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
@Component({
  selector: 'app-admin-page10-gerer-user',
  templateUrl: './admin-page10-gerer-user.component.html',
  styleUrls: ['./admin-page10-gerer-user.component.scss']
})
export class AdminPage10GererUserComponent implements OnInit {
 dataa : any ;
  constructor(private user : UserService , private router : Router ) { }

  ngOnInit() {
    this.user.getUser().subscribe(
      result=>{
        this.dataa = result;  
      }
    )
   
  }
  bloque(id : any ){
    this.user.UpdateBlock(id).subscribe(
      result=>{
        this.dataa = result;  
      }
    )
    this.router.navigate(['admin/gerer-user']);
  }
  debloque(id : any ){
    this.user.UpdateDeBlock(id).subscribe(
      result=>{
        this.dataa = result;  

      }
    )
    this.router.navigate(['admin/gerer-user']);
  }
}
