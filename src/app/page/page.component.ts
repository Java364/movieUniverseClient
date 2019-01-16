import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  hasToken(): boolean {
    return this.authService.hasToken();
  }
  logOut() {
    this.authService.removeToken();
<<<<<<< HEAD
    this.router.navigate(['/']);
  }
}
=======
    this.router.navigate(['/main']);

}}
>>>>>>> 9a0e8d2e6959ac5b2a1f1142743f78b94eb31a35
