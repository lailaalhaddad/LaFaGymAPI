//import
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); //middleware

const instructorRoutes = require("./routes/instructors");
const clientRoutes = require("./routes/clients");
const classRoutes = require("./routes/classes");

app.use("/instructorReq", instructorRoutes);
app.use("/clientReq", clientRoutes);
app.use("/classReq", classRoutes);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
