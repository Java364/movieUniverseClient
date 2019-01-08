import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { StarModule } from './star/star.module';

@NgModule({
    exports:[
        StarModule
    ],
    imports:[
        HttpClientModule,
        CommonModule,
        
        StarModule
    ]
})

export class ComponentsModule {

}