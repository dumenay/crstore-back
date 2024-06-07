import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Users from './usersModel';
import Addresses from './addressesModel';
import Payments from './paymentsModel';
import Cupons from './cuponsModel';

const Orders = sequelize.define(
  'orders',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING(255),
      defaultValue: 'criado',
    },
    total: {
      type: DataTypes.NUMBER,
    },
    totalDiscount: {
      field: 'total_discount',
      type: DataTypes.NUMBER,
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

Orders.belongsTo(Users, {
  as: 'UsersCustomer',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'idUserCustomer',
    allowNull: false,
    field: 'id_user_customer',
  },
});

Orders.belongsTo(Users, {
  as: 'UsersDeliver',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'idUserDeliver',
    allowNull: false,
    field: 'id_user_deliver',
  },
});

Orders.belongsTo(Addresses, {
  as: 'Address',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'idAddress',
    allowNull: false,
    field: 'id_address',
  },
});

Orders.belongsTo(Payments, {
  as: 'Payments',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'idPayment',
    allowNull: false,
    field: 'id_payment',
  },
});

Orders.belongsTo(Cupons, {
  as: 'Cupons',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'idCupom',
    allowNull: false,
    field: 'id_cupom',
  },
});

export default Orders;
