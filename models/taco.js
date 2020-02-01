// Sequelize
module.exports = function(sequelize, DataTypes) {
	
// create taco
var Taco = sequelize.define("Taco", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	  },
	  taco_name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
		  len: [1]
		}
	  },
	  devoured: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false
	  }
	});
	return Taco;
  };