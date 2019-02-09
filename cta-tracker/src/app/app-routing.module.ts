import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArrivalsComponent } from './arrivals/arrivals.component';
import { DirectionsComponent } from './directions/directions.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FollowVehicleComponent } from './follow-vehicle/follow-vehicle.component';
import { RoutesComponent } from './routes/routes.component';
import { StopsComponent } from './stops/stops.component';


const routes: Routes = [
  { path: '', redirectTo: '/routes', pathMatch: 'full' },
  { path: 'routes', component: RoutesComponent },
  { path: 'directions/:route', component: DirectionsComponent },
  { path: 'stops/:route/:direction', component: StopsComponent },
  { path: 'arrivals/:route/:direction/:stopId/:stopName', component: ArrivalsComponent },
  { path: 'arrivals/:route/:direction/:stopId/:vehicleId', component: FollowVehicleComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '**', redirectTo: '/routes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
