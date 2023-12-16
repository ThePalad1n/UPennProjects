module.exports = (sequelize, DataType) => {
var Educations = sequelize.define("Education", {
    instiution: {
        type: DataType.STRING,
        allowNull: false
     },
     field: {
        type: DataType.STRING,
        allowNull: false
     },
     strtDate: {
        type: DataType.STRING,
        allowNull: false
     },
     endDate: {
        type: DataType.STRING,
        allowNull: false
     }
  })
  return Educations;
};