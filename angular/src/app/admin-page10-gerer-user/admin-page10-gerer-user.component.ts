import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
@Component({
  selector: 'app-admin-page10-gerer-user',
  templateUrl: './admin-page10-gerer-user.component.html',
  styleUrls: ['./admin-page10-gerer-user.component.scss']
})
export class AdminPage10GererUserComponent implements OnInit {
 dataa : any ;
  constructor(private service : UserService ) { }

  ngOnInit() {
    this.service.getUser().subscribe(
      result=>{
        this.dataa = result;  
      }
    )
  }

}
