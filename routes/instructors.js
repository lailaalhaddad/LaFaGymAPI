const express = require("express");
const router = express.Router();

let instructorReq = require("../instructor");

// instructor list
router.get("/", (req, res) => {
  res.json(instructorReq);
});

// instructor Delete
router.delete("/:instructorId", (req, res) => {
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

// instructor create
router.post("/", (req, res) => {
  const id = instructorReq[instructorReq.length - 1].id + 1;
  const slug = slugify(req.body.instructor, { lower: true });
  const newInstructor = { id, slug, ...req.body };
  instructorReq.push(newInstructor);
  res.status(201).json(newInstructor);
});

// instructor update
router.put("/:instructorId", (req, res) => {
  const { instructorId } = req.params;
  const foundInst = instructorReq.find(
    (instructor) => instructor.id === +instructorId
  );
  if (foundInst) {
    for (const id in req.body) foundInst[id] = req.body[id];
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Instructor not found" });
  }
});

module.exports = router;
