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
exports.clientsUpdate = async (req, res) => {
  const { clientId } = req.params;
  try {
    const foundclient = await Client.findByPk(clientId);
    if (foundclient) {
      await foundclient.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Client not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete
exports.clientsDelete = async (req, res) => {
  const { clientId } = req.params;
  try {
    const foundclient = await Client.findByPk(clientId);
    if (foundclient) {
      await foundclient.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "client with this ID doesn't exist." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
