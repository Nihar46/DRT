import db from "../../connection/sequelizePostgres.js";
import { DataTypes } from "sequelize";

const CountryMaster = db.define("CountryMasters", {
  country_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  country_code: {
    type: DataTypes.STRING,
  },
  country_name: {
    type: DataTypes.STRING,
  },
  currency_code: {
    type: DataTypes.STRING,
  },
  currency_name: {
    type: DataTypes.STRING,
  },
  flag_image_url: {
    type: DataTypes.STRING,
  },
});

CountryMaster.sync({ alter: true })
  .then(() => {
    console.log("CountryMaster table synchronized");
  })
  .catch((error) => {
    console.log("Error in synchronizing CountryMaster table:", error);
  });

export default CountryMaster;
