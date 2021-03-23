const express = require("express");
const router = express.Router();

const {
  clientsCreate,
  clientsList,
  clientsUpdate,
  clientsDelete,
} = require("../controllers/clientsController");

// client List
router.get("/", clientsList);

// client delete
router.delete("/:clientId", clientsDelete);

// client create
router.post("/", clientsCreate);

// client update
router.put("/:clientId", clientsUpdate);

module.exports = router;
