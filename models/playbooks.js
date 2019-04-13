module.exports = function(sequelize, DataTypes) {
    var Playbooks = sequelize.define("Playbooks", {
      team: DataTypes.STRING,
      ballSide: DataTypes.TEXT,
      Formation: DataTypes.TEXT,
      inForm: DataTypes.TEXT,
      playName: DataTypes.TEXT,
      imageLink: DataTypes.TEXT
    });
    return Playbooks;
  };