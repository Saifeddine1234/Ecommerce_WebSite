import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-page18-resetpassword',
  templateUrl: './page18-resetpassword.component.html',
  styleUrls: ['./page18-resetpassword.component.scss']
})
export class Page18ResetpasswordComponent implements OnInit {

  constructor(private user : UserService , private route: ActivatedRoute) {
    this.user.getResetPassword(this.route.snapshot.params['id'] , this.route.snapshot.params['token']).subscribe(
      result=>{
        console.log(result);
      }
    )

   }

  ngOnInit(): void {
  }

}
