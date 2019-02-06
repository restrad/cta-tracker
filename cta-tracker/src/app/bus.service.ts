import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BustimeResponse } from './busResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  busRouteURL: string;
  constructor(private http: HttpClient) {
    this.busRouteURL = 'http://127.0.0.1:5000/busstoparrivals?stopId=963'
  }

  arrivals(): Observable<BustimeResponse> {
    console.log("About to call arrivals!");
    return this.http.get<BustimeResponse>(this.busRouteURL);
  }
}
