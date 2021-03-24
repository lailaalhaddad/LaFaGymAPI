const express = require("express");
const router = express.Router();

const {
  SuperClassCreate,
  SuperClassList,
  SuperClassUpdate,
  SuperClassDelete,
} = require("../controllers/SuperClassController");

// class list
router.get("/", SuperClassList);

// class delete
router.delete("/:classId", SuperClassDelete);

// class createSuperClass
router.post("/", SuperClassCreate);
// router.post("/superclasses/:SuperId/classes", SuperClassCreate);
// class update
router.put("/:classId", SuperClassUpdate);

module.exports = router;
