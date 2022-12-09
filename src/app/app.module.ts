import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinFacadeComponent } from './components/sin-facade/sin-facade.component';
import { ConFacadeComponent } from './components/con-facade/con-facade.component';

@NgModule({
  declarations: [
    AppComponent,
    SinFacadeComponent,
    ConFacadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
