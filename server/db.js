const Pool = require("pg").Pool;
// if (process.env.NODE_ENV!=="production") {
//   require("dotenv").config();
// }

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "Afnan786",
  port: 3000,
  database: "ultimate_asian_food_e_shop",
});

// const pool = new Pool({
//   user: process.env.PG_USER,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DB,
//   password: process.env.PG_PASSWORD,
//   port: process.env.PG_PORT,
// });

module.exports = pool;
