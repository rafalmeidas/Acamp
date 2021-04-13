import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CampsComponent } from './camps.component';
import { ContainerFluidModule } from 'src/app/shared/components/container-fluid/container-fluid.module';
import { PaginateModule } from 'src/app/shared/components/paginate/paginate.module';
import { CardModule } from 'src/app/shared/components/card/card.module';


@NgModule({
    declarations: [
        CampsComponent, 
    ],
    exports: [ 
        CampsComponent,
    ],
    imports: [ 
        CommonModule,
        RouterModule,
        ContainerFluidModule,
        PaginateModule,
        CardModule
    ]
})
export class AcampsModule {

}