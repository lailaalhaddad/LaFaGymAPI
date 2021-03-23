let instructorReq = require("../instructor");
const { Inst } = require("../db/models");

// create
exports.instructorsCreate = async (req, res) => {
  try {
    const newInst = await Inst.create(req.body);
    res.status(201).json(newInst);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// list
exports.instructorsList = async (req, res) => {
  try {
    const instructors = await Inst.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(instructors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update
exports.instructorsUpdate = (req, res) => {
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
};

// delete
exports.instructorsDelete = (req, res) => {
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
};
