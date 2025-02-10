import { Routes } from "@angular/router";
import { AllcabsComponent } from "./allcabs/allcabs.component";
import { AppComponent } from "./app.component";



const routeConfig: Routes = [
  //{ path: '', component: AppComponent, data: { title: 'Home' } },  // Landing page route
  { path: 'allCabs', component: AllcabsComponent, data: { title: 'View all Cabs' } }  // Route to AllcabsComponent
];

export default routeConfig;