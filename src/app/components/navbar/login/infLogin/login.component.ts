import { Component, OnInit } from '@angular/core';
import {User} from '../../signup/user';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {SignupService} from "../../signup/signup.service";
import {LoginService} from "../login.service";
import {AuthService} from '../../../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;
  userf: FormGroup;
  email: string;

  constructor(/*private loginService: LoginService,*/
              private authService: AuthService,

              private fb: FormBuilder) {
    this.user = new User();
  }

  ngOnInit() {
  }

    loginGeneral(userf) {
    const email = userf.value.email;
    const password = userf.value.password;
    this.authService.login(email, password);


  }



}
