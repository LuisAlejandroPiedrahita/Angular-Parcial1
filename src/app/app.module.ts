import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import {APP_ROUTING} from "./app.routes";
import {ParqueaderoComponent} from "./components/parqueadero/parqueadero.component";
import { ConversionComponent } from './components/conversion/conversion.component';
import { FormConversionComponent } from './components/form-conversion/form-conversion.component';
import {FormsModule} from "@angular/forms";
import { ResultadoConversionComponent } from './components/resultado-conversion/resultado-conversion.component';
import { FormParqueaderoComponent } from './components/form-parqueadero/form-parqueadero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ParqueaderoComponent,
    ConversionComponent,
    FormConversionComponent,
    ResultadoConversionComponent,
    FormParqueaderoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
