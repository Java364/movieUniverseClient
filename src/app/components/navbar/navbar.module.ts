import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarService } from './navbar.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../core/auth.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    NavbarService,
    AuthService
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
