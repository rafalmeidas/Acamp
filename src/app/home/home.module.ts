import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UtilFormModule } from '../shared/components/util-form/util-form.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { CarouselModule } from '../shared/components/carousel/carousel.module';
import { ContainerFluidModule } from '../shared/components/container-fluid/container-fluid.module';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        HomeComponent
    ],
    exports: [
        SigninComponent,
        SignupComponent
    ],
    imports : [
        CommonModule,
        ContainerFluidModule,
        CarouselModule,
        RouterModule,
        ReactiveFormsModule,
        UtilFormModule,
        CarouselModule
    ]
})
export class HomeModule {

}