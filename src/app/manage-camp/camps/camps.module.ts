import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CampsComponent } from './camps.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ContainerFluidModule } from 'src/app/shared/components/container-fluid/container-fluid.module';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations: [
        CampsComponent, 
    ],
    exports: [ 
        CampsComponent,
    ],
    imports: [ 
        CommonModule,
        CardModule,
        RouterModule,
        ContainerFluidModule,
        DarkenOnHoverModule
    ]
})
export class AcampsModule {

}