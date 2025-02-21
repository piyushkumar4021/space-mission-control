const fs = require('fs');
const { join } = require('path');
const { parse } = require('csv-parse');

function isHabitable(planet) {
  return (
    planet['koi_disposition'] === 'CONFIRMED' &&
    planet['koi_insol'] > 0.36 &&
    planet['koi_insol'] < 1.11 &&
    planet['koi_prad'] < 1.6
  );
}

const habitablePlanets = [];

async function loadPlanets() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
      .pipe(
        parse({
          comment: '#',
          columns: true,
        })
      )
      .on('data', (planet) => {
        if (isHabitable(planet)) habitablePlanets.push(planet);
      })
      .on('error', (err) => {
        console.log(err);
        reject();
      })
      .on('end', async () => {
        console.log(`${habitablePlanets.length} Habitable planets found.`);
        resolve();
      });
  });
}

module.exports = {
  loadPlanets,
  planets: habitablePlanets,
};
