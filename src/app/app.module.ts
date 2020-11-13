import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ContainerModule } from './shared/container/container.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ErrorsModule } from './errors/erros.module';
import { MainComponent } from './main/main.component';


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
    CoreModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
