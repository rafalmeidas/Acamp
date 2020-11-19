import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContainerModule } from '../shared/container/container.module';
import { GridModule } from '../shared/grid/grid.module';
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
        GridModule
    ]
})
export class MainModule {}