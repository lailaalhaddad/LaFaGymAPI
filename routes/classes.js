const express = require("express");
const router = express.Router();

const {
  classesCreate,
  classesList,
  classesUpdate,
  classesDelete,
} = require("../controllers/classesController");

// class list
router.get("/", classesList);

// class delete
router.delete("/:classId", classesDelete);

// class create
router.post("/", classesCreate);

// class update
router.put("/:classId", classesUpdate);

module.exports = router;
