import { DataTypes } from "sequelize";
import db from "../../connection/sequelizePostgres.js";
import StateMaster from "./stateMasterModel.js"; // Import the StateMaster model for association
import CountryMaster from "./countryMasterModel.js"; // Import the CountryMaster model for association

const CityMaster = db.define("CityMasters", {
  city_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  city_name: {
    type: DataTypes.STRING,
  },
  state_id: {
    type: DataTypes.INTEGER,
    // Foreign key referencing the StateMaster table
  },
  country_id: {
    type: DataTypes.INTEGER,
    // Foreign key referencing the CountryMaster table
  },
});

// Define foreign key relationships
CityMaster.belongsTo(StateMaster, {
  foreignKey: "state_id",
  targetKey: "state_id",
  as: "state",
});

CityMaster.belongsTo(CountryMaster, {
  foreignKey: "country_id",
  targetKey: "country_id",
  as: "country",
});

// Sync the model with the database
CityMaster.sync({ alter: true })
  .then(() => {
    console.log("CityMaster table synchronized");
  })
  .catch((error) => {
    console.log("Error in synchronizing CityMaster table:", error);
  });

export default CityMaster;
