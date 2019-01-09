import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";
import {User} from "../user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user: User;

  constructor(private signupService: SignupService) {
    this.user = new User();
  }


  ngOnInit() {
  }

  registrate = () => {
    this.signupService.create(this.user, (success) => {
      this.user = <User>success;

    });
  }

}
