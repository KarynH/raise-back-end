const pgp = require("pg-promise")();
require("dotenv").config();

const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    DATABASE_URL : "postgres://raise_user:nR8d6O6YdL6hQvoyE0t7T9df48bSuJ5A@dpg-cfi7mo1gp3jh03i4kpr0-a/raise"
  };

  const db = pgp(cn);
module.exports = db;