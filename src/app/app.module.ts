import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ContainerModule } from './shared/components/container/container.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ErrorsModule } from './errors/erros.module';
import { MainModule } from './main/main.module';
import { CarouselModule } from './shared/components/carousel/carousel.module';
import { CardModule } from './shared/components/card/card.module';
import { ManageAcampModule } from './manage-acamp/manage-acamp.module';
import { ImageModule } from './shared/components/image/image.module';
import { AcampsModule } from './manage-acamp/acamps/acamps.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    ErrorsModule,
    BrowserModule,
    ContainerModule,
    CarouselModule,
    CardModule,
    MainModule,
    CoreModule,
    HomeModule,
    ManageAcampModule,
    ImageModule,
    AcampsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }