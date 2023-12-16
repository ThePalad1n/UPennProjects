module.exports = (sequelize, DataType) => {
    var Skills = sequelize.define("Skill", {
       skillName: {
          type: DataType.STRING,
          allowNull: false
       },
       skillLevel: {
          type: DataType.STRING,
          allowNull: false
       },
       keyword: {
          type: DataType.STRING,
          allowNull: false
       },
       skillName2: {
         type: DataType.STRING,
         allowNull: false
      },
      skillLevel2: {
         type: DataType.STRING,
         allowNull: false
      },
      keyword2: {
         type: DataType.STRING,
         allowNull: false
      },
      skillName3: {
         type: DataType.STRING,
         allowNull: false
      },
      skillLevel3: {
         type: DataType.STRING,
         allowNull: false
      },
      keyword3: {
         type: DataType.STRING,
         allowNull: false
      },
      skillName4: {
         type: DataType.STRING,
         allowNull: false
      },
      skillLevel4: {
         type: DataType.STRING,
         allowNull: false
      },
      keyword4: {
         type: DataType.STRING,
         allowNull: false
      },
      skillName5: {
         type: DataType.STRING,
         allowNull: false
      },
      skillLevel5: {
         type: DataType.STRING,
         allowNull: false
      },
      keyword5: {
         type: DataType.STRING,
         allowNull: false
      }
    })
    return Skills;
 };