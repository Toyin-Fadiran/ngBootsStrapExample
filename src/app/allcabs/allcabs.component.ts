import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Cab } from './cab.model';
import { CabService } from '../cab.service';
import { map } from 'rxjs/operators';




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



// fetchCabs(): void {
//   this.cabService.getCabs().subscribe({
//     next: (data) => {
//       this.Cabs = data; // Handle the received data
//     },
//     error: (error) => {
//       console.error('Error fetching cabs:', error); // Handle the error
//     }
//   });

fetchCabs(): void {
  this.cabService.getCabs().pipe(
    map(data => data.map(item => ({
      id: item.id,              // Keep the id field
      typeOfCab: item.typeOfCab, // Map typeOfCab from the API response
      fare: item.fare           // Map fare from the API response
      // Ignore other fields that are not in the Cab interface
    })))
  ).subscribe({
    next: (filteredData) => {
      this.Cabs = filteredData; // Handle the filtered data
    },
    error: (error) => {
      console.error('Error fetching cabs:', error); // Handle the error
    }
  });
}

}


  



