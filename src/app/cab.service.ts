import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cab } from './allcabs/cab.model';

@Injectable({
  providedIn: 'root'
})
export class CabService {
  private apiUrl = 'http://localhost:8082/cab/addtwo'; // Replace with your API endpoint


  constructor(private http: HttpClient) { }

  getCabs(): Observable<Cab[]> {
    return this.http.get<Cab[]>(this.apiUrl);
  }
}
