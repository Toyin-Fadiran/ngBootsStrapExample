import { Component, inject } from '@angular/core';
import { CabService } from '../cab.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Cab } from './cab.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-allcabs',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './allcabs.component.html',
  styleUrls: ['./allcabs.component.css']
})
export class AllcabsComponent {

  Cabs: Cab[] = [];

  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private cabService: CabService) {}

  fetchCabs(): void {
    this.cabService.getCabs().pipe(
      map(data => data.map(item => ({
        cabId: item.cabId,              // Keep the id field
        typeOfCab: item.typeOfCab,      // Map typeOfCab from the API response
        rate: item.rate                 // Map fare from the API response
      }))),
      // Catch any errors in the observable pipeline
      catchError((error) => {
        // Log detailed error information
        console.error('Error occurred while fetching cabs:', error);
        // Return an empty array or a default value so the app doesn't crash
        return of([]); // Return an empty array if error occurs
      })
    ).subscribe({
      next: (filteredData) => {
        this.Cabs = filteredData;  // Handle the filtered data
        console.log('Cabs fetched successfully:', this.Cabs);
      },
      error: (error) => {
        // Handle any errors that might occur in the subscription
        console.error('Error in subscription:', error);
      }
    });
  }
}
