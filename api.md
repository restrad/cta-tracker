# API

## Requirements

* Homepage => ```/```

### Bus

* GET all bus routes => ```/busroutes/?route={routeId}```
* GET bus route directions => ```/busroutedirections/?direction={direction}```
* GET bus route stops => ```/busroutestops/?route={routeId}?direction={direction}```
* GET bus stop arrivals => ```/bustoparrivals/?stop={stopId}```
* GET current bus location and next stops (Follow bus) => ```/busfollow/?vehicle={vehicleId}```

### Train

* GET train stop arrival times => ```/trainstops/?stop={stopId}```
* GET train vehicle location and next stops (Follow train) => ``` /trainfollow/?vehicle={vehicleId}```
