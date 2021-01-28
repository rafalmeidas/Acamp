import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CampsComponent } from './camps.component';
import { AcampComponent } from './camp/camp.component';
import { ImageModule } from 'src/app/shared/components/image/image.module';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ContainerFluidModule } from 'src/app/shared/components/container-fluid/container-fluid.module';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';


@NgModule({
    declarations: [
        CampsComponent, 
        AcampComponent
    ],
    exports: [ 
        CampsComponent,
        AcampComponent
    ],
    imports: [ 
        CommonModule,
        ImageModule,
        CardModule,
        RouterModule,
        ContainerFluidModule,
        DarkenOnHoverModule
    ]
})
export class AcampsModule {

}