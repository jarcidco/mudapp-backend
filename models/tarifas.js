/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifas', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_proveedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'proveedor',
        key: 'id'
      }
    },
    id_vehiculo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'vehiculos',
        key: 'id'
      }
    },
    distancia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    capacidad_total: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'tarifas'
  });
};
