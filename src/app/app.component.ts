import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AllcabsComponent } from "./allcabs/allcabs.component";
import { CabService } from './cab.service';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AllcabsComponent,RouterLink, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phase3app';

  constructor( private cabService: CabService){}
}
