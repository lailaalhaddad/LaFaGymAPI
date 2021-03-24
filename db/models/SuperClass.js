module.exports = (sequelize, DataTypes) => {
  const SuperClass = sequelize.define("SuperClass", {
    className: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.STRING,
    },
    timing: {
      type: DataTypes.STRING,
    },
  });
  return SuperClass;
};
