import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { PageModule } from './page/page.module';
import { MatFormFieldModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    PageModule,
    MatFormFieldModule
  ],
  providers: [
    /*{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },*/

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }





