import accountManagerSalesRepRoutes from "./accountManagerSalesRepRoutes.js";

const routes = (app) => {
  // TESTING THE API ROUTE
  app.get("/test", (req, res) => {
    console.log("API HIT!!!");
    return res.json({ message: "Api Working!" });
  });

  app.get("/login", (req, res) => {
    console.log("Login API WORKING");
    return res.json({ message: "Login working" });
  });
  app.use("/account-manager-sales-rep", accountManagerSalesRepRoutes);
};

export default routes;
