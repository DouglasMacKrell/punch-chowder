const pgp = require("pg-promise")();
//temp connection string before switching to .env
const connectionString = "postgres://localhost:5432/punchchowder";
const db = pgp(connectionString);

module.exports = db;
