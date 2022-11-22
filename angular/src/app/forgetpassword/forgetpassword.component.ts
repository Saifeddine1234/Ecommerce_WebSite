import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  loading = false;
  buttionText = "Submit";
  constructor(public http: UserService) { }

  ngOnInit(): void {
  }
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  register() {
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      email:  this.emailFormControl.value
    }
    this.http.sendEmail(user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.email} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = "Submit";
      },() => {
        this.loading = false;
        this.buttionText = "Submit";
      }
    );
  }
}
