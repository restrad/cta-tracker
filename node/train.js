const request = require('request');
const config = require('./config.json');

exports.stops = (req, res) => {
  const mapId = req.query.stopId;
  const url = config.train.baseURL+'/ttarrivals.aspx?key='+config.train.APIKey+'&mapId='+mapId+'&outputType=JSON';
};

exports.follow = (req, res) => {
  const runNumber = req.query.vehicleId;
  const url = config.train.baseURL+'/ttfollow.aspx?key='+config.train.APIKey+'&runnumber='+runNumber+'&outputType=JSON';
};
