import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerFluidModule } from '../shared/container-fluid/container-fluid.module';
import { MenuComponent } from './menu/menu.component';
import { PlataformDetectorService } from './plataform-detector/plataform-detector.service';




@NgModule({
    declarations: [
        MenuComponent,
    ],
    exports: [
        MenuComponent, 
    ],
    imports : [
        CommonModule,
        RouterModule,
        ContainerFluidModule
    ]
})
export class CoreModule {

}