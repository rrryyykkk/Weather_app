const massive = require("massive");

let db;

const getDB = async ({ NODE_ENV }) => {
  if (db) return db;

  try {
    if (NODE_ENV !== "production") {
      db = await massive({
        host: "127.0.0.1",
        port: 5432,
        database: "WeatherApp",
        user: "postgres",
        password: "Kiki224485",
      });
    } else {
      db = await massive({
        connectionString: process.env.DATABASE_URL,
      });
    }
    console.log("Database connected");
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

module.exports = getDB;
