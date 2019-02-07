import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BustimeResponse } from '../busResponse';
import { Config } from '../config/Config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  busArrivalsURL: string;
  constructor(private http: HttpClient) {
    this.busArrivalsURL = `${Config.baseURL}/busstoparrivals`;
  }

  arrivals(stopId: number): Observable<BustimeResponse> {
    console.log("About to call arrivals!");
    return this.http.get<BustimeResponse>(`${this.busArrivalsURL}?stopId=${stopId}`);
  }
}
