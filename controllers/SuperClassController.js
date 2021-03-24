const { SuperClass } = require("../db/models");

// create
exports.SuperClassCreate = async (req, res) => {
  try {
    const newSuper = await SuperClass.create(req.body);
    res.status(201).json(newSuper);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// list
exports.SuperClassList = async (req, res) => {
  try {
    const Super = await SuperClass.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(Super);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update
exports.SuperClassUpdate = async (req, res) => {
  const { SuperId } = req.params;
  try {
    const foundSuper = await SuperClass.findByPk(SuperId);
    if (foundSuper) {
      await foundSuper.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Class not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete
exports.SuperClassDelete = async (req, res) => {
  const { SuperId } = req.params;
  try {
    const foundSuper = await SuperClass.findByPk(SuperId);
    if (foundSuper) {
      await founds.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "class with this ID doesn't exist." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
