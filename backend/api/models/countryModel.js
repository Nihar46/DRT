import db from "../../connection/sequelizePostgres.js";
import { DataTypes } from "sequelize";
import User from "./userModel.js"; // Import the User model for association
import CountryMaster from "./countryMasterModel.js"; // Import the CountryMaster model for association

const Country = db.define("Countrys", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  country_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // foreign key referencing the country master table
  },
  region: {
    type: DataTypes.INTEGER,
  },
  division: {
    type: DataTypes.INTEGER,
  },
  assigned_admin_id: {
    type: DataTypes.UUID,
    //foreign key referencing the User table
  },
  createdBy: {
    type: DataTypes.STRING,
  },
  modifiedBy: {
    type: DataTypes.STRING,
  },
  createdDate: {
    type: DataTypes.DATE,
  },
  updatedDate: {
    type: DataTypes.DATE,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  resetPasswordToken: {
    type: DataTypes.STRING,
  },
});

// Define foreign key relationships
Country.belongsTo(User, {
  foreignKey: "assigned_admin_id",
  targetKey: "user_uuid",
  as: "assignedAdmin",
});
Country.belongsTo(CountryMaster, {
  foreignKey: "country_id",
  as: "countryMaster",
});

Country.sync({ alter: true })
  .then(() => {
    console.log("Country table synchronized");
  })
  .catch((error) => {
    console.log("Error in synchronizing Country table:", error);
  });

export default Country;
