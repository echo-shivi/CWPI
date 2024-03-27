const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes); 

const port = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.send("Hello, Welcome to Bvm-Project-Management-System-Backend!");
});

app.listen(port, () => {
  console.log(`Successfully started the server on PORT: ${port}`);
 

});
