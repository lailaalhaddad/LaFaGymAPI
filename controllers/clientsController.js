let clientReq = require("../client");
const { Client } = require("../db/models");

// create
exports.clientsCreate = async (req, res) => {
  try {
    const newClient = await Client.create(req.body);
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// list
exports.clientsList = async (req, res) => {
  try {
    const clients = await Client.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
