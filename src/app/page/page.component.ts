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
    this.router.navigate(['/main']);
  }
}
