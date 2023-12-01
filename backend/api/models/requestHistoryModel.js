import { DataTypes } from "sequelize";
import db from "../../connection/sequelizePostgres.js";
import Request from "./requestModel.js"; // Import the Request model for association
import User from "./userModel.js";

const RequestHistory = db.define("RequestHistories", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  request_id: {
    type: DataTypes.INTEGER,
    unique: true,
    // Foreign key referencing the Request table
  },
  activity: {
    type: DataTypes.ENUM("Create", "Read", "Update", "Delete"), // Adjust enum values based on your CRUD actions
  },
  activity_comment: {
    type: DataTypes.STRING,
  },
  createdBy: {
    type: DataTypes.STRING,
    // Foreign key referencing the User table
  },
  createdDate: {
    type: DataTypes.DATE,
  },
});

// Define foreign key relationships
RequestHistory.belongsTo(Request, {
  foreignKey: "request_id",
  targetKey: "request_id",
  as: "request",
});
// Assuming User is the model for the user table
/*RequestHistory.belongsTo(User, {
  foreignKey: "createdBy",
  targetKey: "user_uuid", // Assuming 'id' is the primary key of the User table
  as: "creator",
});*/

// Sync the model with the database
RequestHistory.sync({ alter: true })
  .then(() => {
    console.log("RequestHistory table synchronized");
  })
  .catch((error) => {
    console.log("Error in synchronizing RequestHistory table:", error);
  });

export default RequestHistory;
