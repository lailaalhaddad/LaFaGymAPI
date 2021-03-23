const SequelizeSlugify = require("sequelize-slugify");
module.exports = (sequelize, DataTypes) => {
  const Inst = sequelize.define("Inst", {
    instructor: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    classType: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.STRING,
    },
  });
  SequelizeSlugify.slugifyModel(Inst, {
    source: ["instructor"],
  });
  return Inst;
};
