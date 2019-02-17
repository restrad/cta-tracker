import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../services/bus.service';
import { BustimeResponse, Direction, Error } from '../busResponse';
import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css']
})
export class DirectionsComponent implements OnInit {

  forRoute: string;
  directions$: Observable<Direction[]>;
  error$: Observable<Error[]>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private busService: BusService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(switchMap(params => {
      this.forRoute = params.get('route');
      return this.busService.directions(this.forRoute);
    })).subscribe((response: BustimeResponse) => {
      if (response.error) {
        this.error$ = of(response.error);
      } else {
        this.directions$ = of(response.directions);
      }
    });
  }

}
