import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ContainerModule } from './shared/container/container.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ErrorsModule } from './errors/erros.module';
import { MainModule } from './main/main.module';
import { CarouselModule } from './shared/carousel/carousel.module';
import { GridModule } from './shared/grid/grid.module';


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
    GridModule,
    MainModule,
    CoreModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }