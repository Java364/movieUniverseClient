import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { PageComponent } from './page.component';
import { UserModule } from './user/user.module';

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
  ]
})
export class PageModule { }
