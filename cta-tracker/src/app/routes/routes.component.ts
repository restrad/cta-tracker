import { Component, OnInit } from '@angular/core';
import { BusService } from '../services/bus.service';
import { BustimeResponse, Route, Error } from '../busResponse';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  routes$: Observable<Route[]>;
  ROUTES: Route[];
  error$: Observable<Error[]>;

  constructor(private busService: BusService) { }

  ngOnInit() {
    this.ROUTES = [];
    this.busService.routes().subscribe((response: BustimeResponse) => {
      if (response.error) {
        this.error$ = of(response.error);
      } else {
        this.routes$ = of(response.routes);
        this.ROUTES = response.routes;
      }
    });
  }

  search(criteria: string) {
    criteria = (criteria ? criteria.trim() : '').toLowerCase();
    this.routes$ = of(this.ROUTES.filter(route => {
      return route.rtnm.toLowerCase().includes(criteria) || route.rt.includes(criteria);
    }));
  }
}
