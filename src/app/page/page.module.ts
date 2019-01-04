import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminModule} from './admin/admin.module';
import {PageComponent} from './page.component';

@NgModule({
  declarations: [PageComponent
  ],
  imports: [
    CommonModule,
    AdminModule
  ],
  exports:[
    PageComponent
  ]
})
export class PageModule { }
