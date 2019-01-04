import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { PageModule } from './page/page.module';
import { AdminModule } from './page/admin/admin.module';



@NgModule({
  declarations: [

    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    PageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
  export class AppModule { }





