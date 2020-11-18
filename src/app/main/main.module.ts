import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContainerModule } from '../shared/container/container.module';
import { MainComponent } from './main.component';

@NgModule({
    declarations: [ 
        MainComponent
    ],
    exports: [ 
        MainComponent,
    ],
    imports: [ 
        CommonModule,
        ContainerModule
    ]
})
export class MainModule {}