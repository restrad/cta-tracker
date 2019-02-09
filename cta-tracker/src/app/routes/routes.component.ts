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
  error$: Observable<Error[]>;

  constructor(private busService: BusService) { }

  ngOnInit() {
    this.busService.routes().subscribe((response: BustimeResponse) => {
      if (response.error) {
        this.error$ = of(response.error);
      } else {
        this.routes$ = of(response.routes);
      }
    });
  }

}
