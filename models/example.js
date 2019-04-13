module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    team: DataTypes.STRING,
    ballSide: DataTypes.TEXT,
    Formation: DataTypes.TEXT,
    inForm: DataTypes.TEXT,
    playName: DataTypes.TEXT,
    imageLink: DataTypes.TEXT
  });
  return Example;
};
 

 

  


