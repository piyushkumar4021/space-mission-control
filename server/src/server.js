const http = require('http');
const app = require('./app');
const { loadPlanets } = require('./models/planets.model');

const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

async function startServer() {
  await loadPlanets();

  server.listen(PORT, () => console.log(`Listening on Port ${PORT}...`));
}

startServer();
