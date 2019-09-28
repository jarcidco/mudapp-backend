/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elementos_trasteo', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    asegurado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    avaluo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'elementos_trasteo'
  });
};
