const express = require("express");
const router = express.Router();

let classReq = require("../class");

// class list
router.get("/", (req, res) => {
  res.json(classReq);
});

// class delete
router.delete("/:classId", (req, res) => {
  const { classId } = req.params;
  const foundclass = classReq.find((clas) => clas.id === +classId);
  if (foundclass) {
    classReq = classReq.filter((clas) => clas !== foundclass);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "class with this ID doesn't exist." });
  }
});

// class create
router.post("/", (req, res) => {
  const id = classReq[classReq.length - 1].id + 1;
  const slug = slugify(req.body.className, { lower: true });
  const newClass = { id, slug, ...req.body };
  classReq.push(newClass);
  res.status(201).json(newClass);
});

// class update
router.put("/:classId", (req, res) => {
  const { classId } = req.params;
  const foundclass = classReq.find((clas) => clas.id === +classId);
  if (foundclass) {
    for (const id in req.body) foundclass[id] = req.body[id];
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Class not found" });
  }
});
router;

module.exports = router;
