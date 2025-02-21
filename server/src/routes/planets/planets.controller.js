const { planets } = require('../../models/planets.model');

const getAllPlanets = (req, res) => {
  return res.send(planets);
};

module.exports = {
  getAllPlanets,
};
