let classReq = require("../class");
const { Clasy } = require("../db/models");

// create
exports.classesCreate = async (req, res) => {
  try {
    const newClass = await Clasy.create(req.body);
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// list
exports.classesList = async (req, res) => {
  try {
    const classy = await Class.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(classy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
