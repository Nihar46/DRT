import { DataTypes } from "sequelize";
import db from "../../connection/sequelizePostgres.js";

const RequestDesignDetail = db.define("RequestDesignDetails", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
  },
  style: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
  installation: {
    type: DataTypes.STRING,
  },
  request_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "Requests", // This should match the table name
      key: "request_id",
    },
  },
});

export default RequestDesignDetail;
