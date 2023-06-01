const express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
var router = express.Router();
const getProjects = require("./getProjects");
const newProject = require("./helpers/NewProject");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", router);

router.use((req, res, next) => {
  console.log("middleware");
  next();
});

router.route("/projects/:company").get(async (req, res) => {
  let response;
  try {
    response = { status: 200, ...(await getProjects(req.params.company)) };
  } catch (e) {
    // res.json("Error Fetching Projects")
    response = { status: 400, ...e };
  }
  res.json(response);
});

router.route("/Addproject/").post(async (req, res) => {
  console.log("cccccc");
  let response;
  try {
    response = { status: 200, ...(await newProject(req.body)) };
  } catch (e) {
    // res.json("Error Fetching Projects")
    response = { status: 400, ...e };
  }
  res.json(response);
});

var port = process.env.Port || 8000;
app.listen(port);
console.log("port runnin at po", port);
