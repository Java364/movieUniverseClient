import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "./user";
import {Router} from "@angular/router";

const baseUrl = 'http://localhost:8080/auth/';

@Injectable()
export class SignupService {

  constructor( private router: Router,
               private httpClient: HttpClient) {
  }

  // public registrate(user: User, callback: Function) {
  //   this.httpClient.post('http://localhost:8080/auth/signup', user).subscribe(
  //     (success) => {
  //       callback(success);
  //     }
  //   );
  // }
  /*signup(firstName: string,lastName: string, email: string, password: string): void {

    this.httpClient.post<any>(baseUrl + 'signup', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }).subscribe();
    alert("all ok");
    this.router.navigate(['/login']);

}*/
   signup(firstName: string,lastName: string, email: string, password: string) {


    this.httpClient.post(baseUrl + 'signup', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }, { responseType: 'text' }).subscribe(
      (success) => {
        console.log("ddss")

        this.router.navigate(['/login']);
      }
    );
  }



}
