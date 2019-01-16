import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/auth.service';
import {FormBuilder, NgForm} from '@angular/forms';
import {User} from '../signup/user';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  public user: User;

  email: string;

  constructor(
              private authService: AuthService,
              private fb: FormBuilder) {
    this.user = new User();
  }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    this.email = form.value.email;
    this.authService.forgotPass(this.email).subscribe();
  }

}
