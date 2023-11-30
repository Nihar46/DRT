import { DataTypes } from "sequelize";
import db from "../../connection/sequelizePostgres.js";

import CountryMaster from "./countryMasterModel.js"; // Import the CountryMaster model for association

const StateMaster = db.define("StateMasters", {
  state_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  state_name: {
    type: DataTypes.STRING,
  },
  country_id: {
    type: DataTypes.INTEGER,
    // Foreign key referencing the CountryMaster table
  },
});

// Define foreign key relationship
StateMaster.belongsTo(CountryMaster, {
  foreignKey: "country_id",
  targetKey: "country_id",
  as: "country",
});

// Sync the model with the database
StateMaster.sync({ alter: true })
  .then(() => {
    console.log("StateMaster table synchronized");
  })
  .catch((error) => {
    console.log("Error in synchronizing StateMaster table:", error);
  });

export default StateMaster;
