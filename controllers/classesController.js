let classReq = require("../class");
const slugify = require("slugify");

// create
exports.classesCreate = (req, res) => {
  const id = classReq[classReq.length - 1].id + 1;
  const slug = slugify(req.body.className, { lower: true });
  const newClass = { id, slug, ...req.body };
  classReq.push(newClass);
  res.status(201).json(newClass);
};

// list
exports.classesList = (req, res) => {
  res.json(classReq);
};

// update
exports.classesUpdate = (req, res) => {
  const { classId } = req.params;
  const foundclass = classReq.find((clas) => clas.id === +classId);
  if (foundclass) {
    for (const id in req.body) foundclass[id] = req.body[id];
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Class not found" });
  }
};

// delete
exports.classesDelete = (req, res) => {
  const { classId } = req.params;
  const foundclass = classReq.find((clas) => clas.id === +classId);
  if (foundclass) {
    classReq = classReq.filter((clas) => clas !== foundclass);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "class with this ID doesn't exist." });
  }
};
