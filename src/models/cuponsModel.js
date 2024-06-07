import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const Cupons = sequelize.define(
  'cupons',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: 'percent',
    },
    value: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    uses: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default Cupons;
