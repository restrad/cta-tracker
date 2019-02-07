import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BustimeResponse } from '../busResponse';
import { Config } from '../config/Config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  busRoutesURL: string;
  busRouteDirectionsURL: string;
  busRouteStopsURL: string;
  busArrivalsURL: string;
  busFollowURL: string;
  constructor(private http: HttpClient) {
    this.busRoutesURL = `${Config.baseURL}/busroutes`;
    this.busRoutesURL = `${Config.baseURL}/busroutedirections`;
    this.busRouteStopsURL = `${Config.baseURL}/busroutestops`;
    this.busArrivalsURL = `${Config.baseURL}/busstoparrivals`;
    this.busFollowURL = `${Config.baseURL}/busfollow`;
  }

  arrivals(stopId: number): Observable<BustimeResponse> {
    console.log("About to call arrivals!");
    return this.http.get<BustimeResponse>(`${this.busArrivalsURL}?stopId=${stopId}`);
  }
}
