import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ErrorsModule } from './errors/erros.module';
import { MainModule } from './main/main.module';
import { CarouselModule } from './shared/components/carousel/carousel.module';
import { CardModule } from './shared/components/card/card.module';
import { ManageAcampModule } from './manage-camp/manage-camp.module';
import { ImageModule } from './shared/components/image/image.module';
import { AcampsModule } from './manage-camp/camps/camps.module';
import { ContainerFluidModule } from './shared/components/container-fluid/container-fluid.module';
import { TabsModule } from './manage-camp/tabs/tabs.module';
import { NgxMaskModule } from "ngx-mask";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    ErrorsModule,
    BrowserModule,
    ContainerFluidModule,
    CarouselModule,
    CardModule,
    MainModule,
    CoreModule,
    HomeModule,
    ManageAcampModule,
    ImageModule,
    AcampsModule,
    TabsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true //Ao salvar , vai manter a mascara para salvar caso false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }