const { Sequelize } = require("sequelize");
const {
  DB_HOST,
  DB_PASSWORD,
  DB_USERNAME,
  DB_NAME,
} = require("../config/index");

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mariadb",
});

const coneccion = async () => {
  try {
    await sequelize.authenticate();
    console.log("db conectada");
    return sequelize;
  } catch (error) {
    console.log(`error ${error}`);

    setTimeout(() => {
      coneccion();
    }, 5000);
  }
};

module.exports = {
  sequelize,
  coneccion,
};
