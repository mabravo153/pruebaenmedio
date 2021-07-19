module.exports = {
  DB_HOST: process.env.MARIADB_HOST || "db",
  DB_USERNAME: process.env.MARIADB_USERNAME || "root",
  DB_PASSWORD: process.env.MARIADB_PASSWORD || "example",
  DB_NAME: process.env.DB_NAME || "xyz",
};
