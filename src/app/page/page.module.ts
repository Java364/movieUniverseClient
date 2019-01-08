import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { PageComponent } from './page.component';
import { MainPageComponent } from './user/main/main-page/main-page.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [PageComponent
  ],
  imports: [
    CommonModule,
    AdminModule,
    UserModule
  ],
  exports: [
    PageComponent
  ]
})
export class PageModule { }
