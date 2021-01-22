import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerFluidComponent } from './container-fluid.component';

@NgModule({
    declarations: [ ContainerFluidComponent ],
    exports: [ ContainerFluidComponent ],
    imports: [ CommonModule ]
})
export class ContainerFluidModule {

}