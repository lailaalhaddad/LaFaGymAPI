const express = require("express");
const router = express.Router();

let clientReq = require("../client");

// client List
router.get("/", (req, res) => {
  res.json(clientReq);
});

// client delete
router.delete("/:clientId", (req, res) => {
  const { clientId } = req.params;
  const foundclient = clientReq.find((client) => client.id === +clientId);
  if (foundclient) {
    clientReq = clientReq.filter((client) => client !== foundclient);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "client with this ID doesn't exist." });
  }
});

// client create
router.post("/", (req, res) => {
  const id = clientReq[clientReq.length - 1].id + 1;
  const slug = slugify(req.body.clientN, { lower: true });
  const newClient = { id, slug, ...req.body };
  clientReq.push(newClient);
  res.status(201).json(newClient);
});

// client update
router.put("/:clientId", (req, res) => {
  const { clientId } = req.params;
  const foundclient = clientReq.find((client) => client.id === +clientId);
  if (foundclient) {
    for (const id in req.body) foundclient[id] = req.body[id];
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Client not found" });
  }
});

module.exports = router;
