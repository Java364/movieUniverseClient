import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";
import {User} from "../user";
import {NgForm} from "@angular/forms";

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
    this.signupService.registrate(this.user, (success) => {
      this.user = <User>success;

    });
  }
  signupGeneral(form: NgForm) {
    console.log('general sign in');

    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const email = form.value.email;
    const password = form.value.password;
    this.signupService.signup(firstName, lastName, email, password);
  }

}
