import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerComponent } from './container.component';

@NgModule({
    declarations: [ ContainerComponent ],
    exports: [ ContainerComponent ],
    imports: [ CommonModule ]
})
export class ContainerModule {

}