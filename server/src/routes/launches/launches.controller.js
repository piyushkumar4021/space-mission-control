const { launches } = require('../../models/launches.model');

function getAllLaunches(req, res) {
  return res.send(launches);
}

module.exports = {
  getAllLaunches,
};
