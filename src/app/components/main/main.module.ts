import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainService } from './main.service';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    MainService
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
