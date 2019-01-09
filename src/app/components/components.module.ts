import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { StarModule } from './star/star.module';
import { MainModule } from './main/main.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
    exports: [
        StarModule,
        MainModule,
        NavbarModule
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        StarModule,
        MainModule,
        NavbarModule
    ],
    declarations: []
})

export class ComponentsModule {
}
