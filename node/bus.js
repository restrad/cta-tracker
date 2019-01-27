const request = require('request');
const config = require('./config.json');

exports.routes = (req, res) => {
  const url = config.bus.baseURL + '/getroutes?key=' + config.bus.APIKey + '&format=json';
  commonRequest(url, res);
};

exports.directions = (req, res) => {
  const route = req.query.route;
  const url = config.bus.baseURL + '/getdirections?key=' + config.bus.APIKey + '&rt=' + route + '&format=json';
  commonRequest(url, res);
}

exports.routeStops = (req, res) => {
  const route = req.query.route;
  const direction = req.query.direction;
  const url = config.bus.baseURL + '/getstops?key=' + config.bus.APIKey + '&rt=' + route + '&dir=' + direction + '&format=json';
  commonRequest(url, res);
}

exports.stopArrivals = (req, res) => {
  const stopId = req.query.stopId;
  const url = config.bus.baseURL + '/getpredictions?key=' + config.bus.APIKey + '&stpid=' + stopId + '&format=json';
  commonRequest(url, res);
}

exports.follow = (req, res) => {
  const vehicleId = req.query.vehicleId;
  const url = config.bus.baseURL + '/getpredictions?key=' + config.bus.APIKey + '&vid=' + vehicleId + '&format=json';
  commonRequest(url, res);
}

function commonRequest(url, res) {
  res.type('json');
  request(url, (error, response, body) => {
    if (error)
      res.status(503).send('{"error": "Unable to reach CTA services."}');
    res.send(body);
  });
}
