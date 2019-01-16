import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { PageComponent } from './page.component';
import { UserModule } from './user/user.module';
import { NavbarModule } from '../components/navbar/navbar.module';
import {AuthService} from "../core/auth.service";

import { MovieModule } from '../components/movie/movie.module';
import { AuthModule } from './auth/auth.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [PageComponent
  ],
  imports: [
    CommonModule,
    AdminModule,
    UserModule,
    MovieModule,
    AuthModule,
    ComponentsModule
  ],
  exports: [
    PageComponent
  ],
  providers: [

  ]
})
export class PageModule { }
