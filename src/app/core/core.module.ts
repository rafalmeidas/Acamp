import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerFluidModule } from '../shared/components/container-fluid/container-fluid.module';
import { RequestInterceptor } from './auth/request-interceptor';
import { MenuComponent } from './menu/menu.component';


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
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor, 
            multi: true
        }
    ]
})
export class CoreModule {

}