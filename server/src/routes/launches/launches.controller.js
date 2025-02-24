const {
  launches,
  addNewLaunch,
  deleteLaunch,
} = require('../../models/launches.model');

function httpGetLaunches(req, res) {
  return res.send(launches);
}

function httpPostLaunch(req, res) {
  const data = req.body;

  if (!data.mission || !data.rocket || !data.target || !data.launchDate)
    return res.status(400).send({
      error: 'Missing property.',
    });

  const launchDate = new Date(data.launchDate);

  if (launchDate.toString() === 'Invalid Date')
    return res.status(400).send({
      error: 'Invalid launch date.',
    });

  data.launched = false;
  data.aborted = false;

  const launch = addNewLaunch(data);

  return res.status(201).send(launch);
}

function httpDeleteLaunch(req, res) {
  const id = Number(req.params.id);

  if (isNaN(id))
    return res.status(400).send({
      error: 'Invalid id.',
    });

  const launch = deleteLaunch(id);

  if (!launch)
    return res.status(404).send({
      error: 'Launch with the id not found.',
    });

  return res.send(launch);
}

module.exports = {
  httpGetLaunches,
  httpPostLaunch,
  httpDeleteLaunch,
};
