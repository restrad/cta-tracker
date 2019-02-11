import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusService } from '../services/bus.service';
import { BustimeResponse, Stop, Error } from '../busResponse';
import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css']
})
export class StopsComponent implements OnInit {

  forRoute: string;
  forDirection: string;
  stops$: Observable<Stop[]>;
  STOPS: Stop[];
  error$: Observable<Error[]>;

  constructor(private activatedRoute: ActivatedRoute,
    private busService: BusService) { }

  ngOnInit() {
    this.STOPS = [];
    this.activatedRoute.paramMap.pipe(switchMap(params => {
      this.forRoute = params.get('route');
      this.forDirection = params.get('direction');
      return this.busService.stops(this.forRoute, this.forDirection);
    })).subscribe((response: BustimeResponse) => {
      if (response.error) {
        this.error$ = of(response.error);
      } else {
        this.stops$ = of(response.stops);
        this.STOPS = response.stops;
      }
    });
  }

  search(criteria: string) {
    criteria = (criteria ? criteria.trim() : '').toLowerCase();
    this.stops$ = of(this.STOPS.filter(stop => stop.stpnm.toLowerCase().includes(criteria)));
  }
}
