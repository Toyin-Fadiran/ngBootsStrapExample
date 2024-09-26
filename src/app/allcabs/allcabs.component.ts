import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Cab } from './cab.model';
import { CabService } from '../cab.service';




@Component({
  selector: 'app-allcabs',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './allcabs.component.html',
  styleUrl: './allcabs.component.css'
})


export class AllcabsComponent {

  Cabs: Cab[] = [];

  constructor(private cabService: CabService) {}



fetchCabs(): void {
  this.cabService.getCabs().subscribe({
    next: (data) => {
      this.Cabs = data; // Handle the received data
    },
    error: (error) => {
      console.error('Error fetching cabs:', error); // Handle the error
    }
  });
}


  


}
