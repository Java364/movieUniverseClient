import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [

    ],
    imports: [
      HttpClientModule,
      CommonModule,
      FormsModule,
     // CountryModule
    ],
    exports: [
      // CountryModule
    ],
    providers: [

    ],
  })
  export class CustomComponentModule {
  }
