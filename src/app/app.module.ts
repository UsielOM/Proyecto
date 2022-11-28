import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FootBarComponent } from './Components/foot-bar/foot-bar.component';
import { BienvenidaComponent } from './Components/bienvenida/bienvenida.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootBarComponent,
    BienvenidaComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
