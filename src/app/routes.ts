import { Routes } from "@angular/router";
import { AllcabsComponent } from "./allcabs/allcabs.component";



const routeConfig: Routes = [
    {
        path: 'allCabs',
        component: AllcabsComponent,
        data: { title: 'View all Cabs' } // Use 'data' instead of 'title'
      }
    
];

export default routeConfig;