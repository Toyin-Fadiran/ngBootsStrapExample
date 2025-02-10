import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule here
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cab } from './allcabs/cab.model';

@Injectable({
  providedIn: 'root'
})
export class CabService {
  private apiUrl = 'http://localhost:8080/cab/all'; // Replace with your API endpoint


  constructor(private http: HttpClient) { }

  getCabs(): Observable<Cab[]> {
    return this.http.get<Cab[]>(this.apiUrl);
  }
}
