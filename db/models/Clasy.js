const SequelizeSlugify = require("sequelize-slugify");
module.exports = (sequelize, DataTypes) => {
  const Clasy = sequelize.define("Clasy", {
    className: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    duration: {
      type: DataTypes.STRING,
    },
    timing: {
      type: DataTypes.STRING,
    },
  });
  SequelizeSlugify.slugifyModel(Clasy, {
    source: ["className"],
  });
  return Clasy;
};
