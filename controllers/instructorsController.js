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
exports.instructorsUpdate = async (req, res) => {
  const { instructorId } = req.params;
  try {
    const foundInst = await Inst.findByPk(instructorId);
    if (foundInst) {
      await foundInst.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Cookie not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete
exports.instructorsDelete = async (req, res) => {
  const { instructorId } = req.params;
  try {
    const foundInst = await Inst.findByPk(instructorId);
    if (foundInst) {
      await foundInst.destroy();
      res.status(204).end();
    } else {
      res
        .status(404)
        .json({ message: "instructor with this ID doesn't exist." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
