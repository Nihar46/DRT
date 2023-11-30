import { DataTypes } from "sequelize";
import db from "../../connection/sequelizePostgres.js";
import Request from "./requestModel.js"; // Import the Request model for association
import User from "./userModel.js";

const RequestClients = db.define("RequestClients", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  client_name: {
    type: DataTypes.STRING,
  },
  client_contact: {
    type: DataTypes.STRING,
  },
  client_email_id: {
    type: DataTypes.STRING,
  },
  other_email_in_clientform: {
    type: DataTypes.STRING,
  },
  outgoing_email_message: {
    type: DataTypes.TEXT,
  },
  request_id: {
    type: DataTypes.INTEGER,
    // Foreign key referencing the Request table
  },
  isEmailSent: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  createdBy: {
    type: DataTypes.UUID,
    // Foreign key referencing the User table
  },
  createdDate: {
    type: DataTypes.DATE,
  },
});

// Define foreign key relationships
RequestClients.belongsTo(Request, {
  foreignKey: "request_id",
  targetKey: "request_id",
  as: "request",
});

// Assuming User is the model for the user table
RequestClients.belongsTo(User, {
  foreignKey: "createdBy",
  targetKey: "user_uuid", // Assuming 'id' is the primary key of the User table
  as: "creator",
});

// Sync the model with the database
RequestClients.sync({ alter: true })
  .then(() => {
    console.log("RequestClients table synchronized");
  })
  .catch((error) => {
    console.log("Error in synchronizing RequestClients table:", error);
  });

export default RequestClients;
