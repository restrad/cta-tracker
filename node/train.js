const request = require('request');
const config = require('./config.json');

exports.stopArrivals = (req, res) => {
  const mapId = req.query.stopId;
  const url = config.train.baseURL+'/ttarrivals.aspx?key='+config.train.APIKey+'&mapId='+mapId+'&outputType=JSON';
  commonRequest(url, res);
};

exports.follow = (req, res) => {
  const runNumber = req.query.vehicleId;
  const url = config.train.baseURL+'/ttfollow.aspx?key='+config.train.APIKey+'&runnumber='+runNumber+'&outputType=JSON';
  commonRequest(url, res);
};

function commonRequest(url, res) {
  res.type('json');
  request(url, (error, response, body) => {
    if (error)
      res.status(503).send('{"error": "Unable to reach CTA services."}');
    res.send(body);
  });
}
