import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../shared/card/card.module';
import { ContainerFluidModule } from '../shared/container-fluid/container-fluid.module';
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
        ContainerModule,
        ContainerFluidModule,
        CardModule
    ]
})
export class MainModule {}