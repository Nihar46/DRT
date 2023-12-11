import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import sequelize from "./connection/sequelizePostgres.js";
//import "./api/models/index.js";
// WILL MODULARIZE LATER
import User from "./api/models/userModel.js";
import Request from "./api/models/requestModel.js";
import Project from "./api/models/projectModel.js";
import RequestDesignDetail from "./api/models/requestDesignDetailModel.js";
import "./api/models/setupAssociations.js";

// Rest of your code...

import routes from "./api/routes/index.js";
import session from "express-session";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import bcryptjs from "bcryptjs";

dotenv.config();

const app = express();

app.use(fileUpload());

app.use(cookieParser());
app.use(
  session({
    secret: "DRT",
    resave: false,
    saveUninitialized: true,
  })
);

const passwordHash = async (password) => {
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);
  console.log("Hashed Password:", hashedPassword);
};

passwordHash("Qwerty@123");

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.json({ limit: "500mb" }));
app.use(
  express.urlencoded({
    limit: "500mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.get("/test", (req, res) => {
  res.json({
    message: "Done",
  });
});
/*
sequelize
  .authenticate()
  .then(() => console.log("Connnected to DB successfully!!"))
  .catch((error) => console.log("Error has occurred:", error));
*/

routes(app);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to DB successfully!!");
    // Synchronize the models here
    return User.sync({ alter: true });
  })
  .then(() => {
    console.log("User table synchronized");
    return Project.sync({ alter: true });
  })
  .then(() => {
    console.log("Project table synchronized");
    return Request.sync({ alter: true });
  })
  .then(() => {
    console.log("Request table synchronized");
    return RequestDesignDetail.sync({ alter: true });
  })
  .then(() => {
    console.log("RequestDesignDetail table synchronized");
    app.listen(process.env.APP_PORT, () => {
      console.log("Listening on port:", process.env.APP_PORT);
    });
  })
  .catch((error) => {
    console.log("Error has occurred:", error);
    // Handle the error or decide if you want to continue starting the server
  });
