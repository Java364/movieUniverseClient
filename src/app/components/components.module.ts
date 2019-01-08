import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { StarModule } from './star/star.module';
import { MainComponent } from './main/main.component';

@NgModule({
    exports: [
        StarModule
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        StarModule
    ],
    declarations: [MainComponent]
})

export class ComponentsModule {
}
