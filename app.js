const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let instructorReq = require("./instructor");
let clientReq = require("./client");
let classReq = require("./class");

// routers
app.get("/instructorReq", (req, res) => {
  res.json(instructorReq);
});

app.get("/clientReq", (req, res) => {
  res.json(clientReq);
});

app.get("/classReq", (req, res) => {
  res.json(classReq);
});

//Delete
app.delete("/instructorReq/:instructorId", (req, res) => {
  const { instructorId } = req.params;
  const foundInst = instructorReq.find(
    (instructor) => instructor.id === +instructorId
  );
  if (foundInst) {
    instructorReq = instructorReq.filter(
      (instructor) => instructor !== foundInst
    );
    res.status(204).end();
  } else {
    res.status(404).json({ message: "instructor with this ID doesn't exist." });
  }
});

app.delete("/clientReq/:clientId", (req, res) => {
  const { clientId } = req.params;
  const foundclient = clientReq.find((client) => client.id === +clientId);
  if (foundclient) {
    clientReq = clientReq.filter((client) => client !== foundclient);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "client with this ID doesn't exist." });
  }
});

app.delete("/classReq/:classId", (req, res) => {
  const { classId } = req.params;
  const foundclass = classReq.find((clas) => clas.id === +classId);
  if (foundclass) {
    classReq = classReq.filter((clas) => clas !== foundclass);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "class with this ID doesn't exist." });
  }
});

//add new instructor, client, and class.
app.post("/instructorReq", (req, res) => {
  const id = instructorReq[instructorReq.length - 1].id + 1;
  const slug = slugify(req.body.name, { lower: true });
  const newInstructor = { id, slug, ...req.body };
  instructorReq.push(newInstructor);
  res.status(201).json(newInstructor);
});

app.post("/clientReq", (req, res) => {
  const id = clientReq[clientReq.length - 1].id + 1;
  const slug = slugify(req.body.name, { lower: true });
  const newClient = { id, slug, ...req.body };
  clientReq.push(newClient);
  res.status(201).json(newClient);
});

app.post("/classReq", (req, res) => {
  const id = classReq[classReq.length - 1].id + 1;
  const slug = slugify(req.body.name, { lower: true });
  const newClass = { id, slug, ...req.body };
  classReq.push(newClass);
  res.status(201).json(newClass);
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
