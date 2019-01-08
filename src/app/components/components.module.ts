import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { StarModule } from './star/star.module';
import { MainModule } from './main/main.module';

@NgModule({
    exports: [
        StarModule,
        MainModule
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        StarModule,
        MainModule
    ],
    declarations: []
})

export class ComponentsModule {
}
