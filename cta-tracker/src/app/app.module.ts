import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArrivalsComponent } from './arrivals/arrivals.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RoutesComponent } from './routes/routes.component';
import { StopsComponent } from './stops/stops.component';
import { DirectionsComponent } from './directions/directions.component';
import { FollowVehicleComponent } from './follow-vehicle/follow-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrivalsComponent,
    FavoritesComponent,
    RoutesComponent,
    StopsComponent,
    DirectionsComponent,
    FollowVehicleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
