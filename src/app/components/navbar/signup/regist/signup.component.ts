import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";
import {User} from "../user";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user: User;
  userForm: FormGroup;

  constructor(private signupService: SignupService,
              private fb: FormBuilder) {
    this.user = new User();
  }
  ngOnInit(): void {
    this.createForm();
  }
  // createPost() {
  //   this.signupService.registrate(this.user, (success) => {
  //     this.user = <User>success;
  //
  //   });
  // }

  signupGeneral(userForm) {
    console.log('general sign in');

      const firstName = userForm.value.firstName;
      const lastName = userForm.value.lastName;

      const email = userForm.value.email;
      const password = userForm.value.password;
      this.signupService.signup(firstName, lastName, email, password);

  }
  firstnameControl: FormControl = new FormControl('', [
    Validators.maxLength(10)
  ]);
  lastnameControl: FormControl = new FormControl('', [
    Validators.maxLength(15)
  ]);
  emailControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(16),
  ]);

  createForm() {
    this.userForm = this.fb.group({
      firstName: this.firstnameControl,
      lastName: this.lastnameControl,
      email: this.emailControl,
      password: this.passwordControl

    });
  }

}
