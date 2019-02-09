import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusService } from '../services/bus.service';
import { BustimeResponse, Prd, Error } from '../busResponse';
import { of, Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.css']
})
export class ArrivalsComponent implements OnInit {

  forRoute: string;
  forDirection: string;
  forStopId: number;
  forStopName: string;
  @Input() vehicles$: Observable<Prd[]>;
  error$: Observable<Error[]>;

  constructor(private activatedRoute: ActivatedRoute,
    private busService: BusService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(switchMap(params => {
      this.forRoute = params.get('route');
      this.forDirection = params.get('direction');
      this.forStopId = +params.get('stopId');
      this.forStopName = params.get('stopName');
      return this.busService.arrivals(this.forStopId);
    })).subscribe((response: BustimeResponse) => {
      if (response.error) {
        this.error$ = of(response.error);
      } else {
        this.vehicles$ = of(response.prd);
      }
    });
    // const stopId = 881;
    // timer(0, 30000).pipe(
    //   switchMap(() => this.busService.arrivals(stopId))
    // ).subscribe(result => {
    //   this.vehicles$ = of(result.prd);
    // });
  }

}
