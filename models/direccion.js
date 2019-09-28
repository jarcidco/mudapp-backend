/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('direccion', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    latitud: {
      type: DataTypes.STRING,
      allowNull: true
    },
    longitud: {
      type: DataTypes.STRING,
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nit: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'direccion'
  });
};
