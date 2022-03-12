import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ParqueaderoComponent} from "./components/parqueadero/parqueadero.component";
import {ConversionComponent} from "./components/conversion/conversion.component";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'parqueadero', component: ParqueaderoComponent },
  { path: 'conversion', component: ConversionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
