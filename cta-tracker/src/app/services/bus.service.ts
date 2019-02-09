import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BustimeResponse } from '../busResponse';
import { Config } from '../config/Config';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  routesURL: string;
  routesPath: string;
  routeDirectionsPath: string;
  routeStopsPath: string;
  arrivalsURL: string;
  followURL: string;
  constructor(private http: HttpClient) {
    this.routesPath = 'busroutes';
    this.routesURL = `${Config.baseURL}/${this.routesPath}`;
    this.routeDirectionsPath = 'busroutedirections';
    this.routeStopsPath = 'busroutestops';
    this.arrivalsURL = `${Config.baseURL}/busstoparrivals`;
    this.followURL = `${Config.baseURL}/busfollow`;
  }

  routes(getCached: boolean = true): Observable<BustimeResponse> {
    console.log("About to call routes!");
    return (getCached && this.getCached(this.routesPath)) ||
      this.http.get<BustimeResponse>(this.routesURL).pipe(tap((response: BustimeResponse) => {
        if (!response.error) {
          localStorage.setItem(this.routesPath, JSON.stringify(response));
        }
      }));
  }

  directions(route: string, getCached: boolean = true): Observable<BustimeResponse> {
    console.log("About to call directions!");
    const path = `${this.routeDirectionsPath}?route=${route}`;
    return (getCached && this.getCached(path)) ||
      this.http.get<BustimeResponse>(`${Config.baseURL}/${path}`).pipe(tap((response: BustimeResponse) => {
        if (!response.error) {
          localStorage.setItem(path, JSON.stringify(response));
        }
      }));
  }

  stops(route: string, direction: string, getCached: boolean = true): Observable<BustimeResponse> {
    console.log("About to call stops!");
    const path = `${this.routeStopsPath}?route=${route}&direction=${direction}`;
    return (getCached && this.getCached(path)) ||
      this.http.get<BustimeResponse>(`${Config.baseURL}/${path}`).pipe(tap((response: BustimeResponse) => {
        if (!response.error) {
          localStorage.setItem(path, JSON.stringify(response));
        }
      }));
  }

  arrivals(stopId: number): Observable<BustimeResponse> {
    console.log("About to call arrivals!");
    return this.http.get<BustimeResponse>(`${this.arrivalsURL}?stopId=${stopId}`);
  }

  follow(vehicleId: number): Observable<BustimeResponse> {
    console.log("About to call follow!");
    return this.http.get<BustimeResponse>(`${this.followURL}?vehicleId=${vehicleId}`);
  }

  getCached(item: string): Observable<BustimeResponse> {
    const cachedResult = localStorage.getItem(item);
    if (cachedResult) {
      try {
        return of(<BustimeResponse>JSON.parse(cachedResult));
      } catch (e) {
        console.log("Unable to cast and return cached " + item);
      }
    }
    return null;
  }
}
