import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
@Component({
  selector: 'app-admin-page11-gerer-assistance',
  templateUrl: './admin-page11-gerer-assistance.component.html',
  styleUrls: ['./admin-page11-gerer-assistance.component.scss']
})
export class AdminPage11GererAssistanceComponent implements OnInit {
 dataa : any ;
  constructor(private service : UserService ) { }

  ngOnInit() {
    this.service.getAssistance().subscribe(
      result=>{
        this.dataa = result;  
        console.log(this.dataa);
      }
    )
  }

}
