module.exports = (sequelize, DataType) => {
   var Certs = sequelize.define("Cert", {
      title: {
         type: DataType.STRING,
         allowNull: false
      },
      certdate: {
         type: DataType.STRING,
         allowNull: false
      },
      awarder: {
         type: DataType.STRING,
         allowNull: false
      },
      title2: {
         type: DataType.STRING,
         allowNull: false
      },
      certdate2: {
         type: DataType.STRING,
         allowNull: false
      },
      awarder2: {
         type: DataType.STRING,
         allowNull: false
      }
   })
   return Certs;
};