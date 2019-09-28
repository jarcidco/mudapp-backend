/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proveedor', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nit: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    nombres: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    estudio_seguridad: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    zona_cobertura: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'proveedor'
  });
};
