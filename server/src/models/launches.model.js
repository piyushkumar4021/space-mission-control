const launches = [];
let launchCount = 0;

function addNewLaunch(newLaunch) {
  newLaunch.id = launchCount + 1;

  launchCount++;

  launches.push(newLaunch);

  return newLaunch;
}

function deleteLaunch(id) {
  const launch = launches.find((l) => l.id === id);

  if (!launch) return null;

  launch.abort = true;

  return launch;
}

module.exports = {
  launches,
  addNewLaunch,
  deleteLaunch,
};
