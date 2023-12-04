import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import sequelize from "./connection/sequelizePostgres.js";
import "./api/models/index.js";
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
sequelize
  .authenticate()
  .then(() => console.log("Connnected to DB successfully!!"))
  .catch((error) => console.log("Error has occurred:", error));

routes(app);

app.listen(process.env.APP_PORT, () => {
  console.log("Listening on port:", process.env.APP_PORT);
});
