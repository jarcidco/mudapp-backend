/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servicios', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_auxiliar: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_trasteo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    id_proveedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'proveedor',
        key: 'id'
      }
    },
    id_direccion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'direccion',
        key: 'id'
      }
    },
    id_direccion2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'direccion',
        key: 'id'
      }
    },
    id_tarifa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tarifas',
        key: 'id'
      }
    },
    id_servicio: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'servicios'
  });
};
