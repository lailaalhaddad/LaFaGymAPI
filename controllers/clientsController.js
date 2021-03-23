let clientReq = require("../client");
const slugify = require("slugify");

// create
exports.clientsCreate = (req, res) => {
  const id = clientReq[clientReq.length - 1].id + 1;
  const slug = slugify(req.body.clientN, { lower: true });
  const newClient = { id, slug, ...req.body };
  clientReq.push(newClient);
  res.status(201).json(newClient);
};

// list
exports.clientsList = (req, res) => {
  res.json(clientReq);
};

// update
exports.clientsUpdate = (req, res) => {
  const { clientId } = req.params;
  const foundclient = clientReq.find((client) => client.id === +clientId);
  if (foundclient) {
    for (const id in req.body) foundclient[id] = req.body[id];
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Client not found" });
  }
};

// delete
exports.clientsDelete = (req, res) => {
  const { clientId } = req.params;
  const foundclient = clientReq.find((client) => client.id === +clientId);
  if (foundclient) {
    clientReq = clientReq.filter((client) => client !== foundclient);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "client with this ID doesn't exist." });
  }
};
