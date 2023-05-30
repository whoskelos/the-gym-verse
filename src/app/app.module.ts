import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { VistaMusculosComponent } from './components/vista-musculos/vista-musculos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundPageComponent,
    FooterComponent,
    VistaMusculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
