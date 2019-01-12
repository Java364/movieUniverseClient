import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { PageComponent } from './page.component';
import { UserModule } from './user/user.module';
import { NavbarModule } from '../components/navbar/navbar.module';
import {AuthService} from "../core/auth.service";

@NgModule({
  declarations: [PageComponent
  ],
  imports: [
    CommonModule,
    AdminModule,
    UserModule,
    NavbarModule
  ],
  exports: [
    PageComponent
  ],
  providers: [
    /*LoginService,*/
    AuthService
  ]
})
export class PageModule { }
