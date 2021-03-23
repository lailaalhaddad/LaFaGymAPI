const express = require("express");
const router = express.Router();

const {
  instructorsCreate,
  instructorsList,
  instructorsUpdate,
  instructorsDelete,
} = require("../controllers/instructorsController");

// instructor list
router.get("/", instructorsList);

// instructor Delete
router.delete("/:instructorId", instructorsDelete);

// instructor create
router.post("/", instructorsCreate);

// instructor update
router.put("/:instructorId", instructorsUpdate);

module.exports = router;
