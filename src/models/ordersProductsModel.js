import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Orders from './ordersModel';
import Products from './productsModel';

const OrdersProducts = sequelize.define(
  'orders_products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    priceProducts: {
      field: 'price_products',
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

OrdersProducts.belongsTo(Orders, {
  as: 'Orders',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'idOrder',
    allowNull: false,
    field: 'id_order',
  },
});

OrdersProducts.belongsTo(Products, {
  as: 'Products',
  onUpdate: 'NO ACTION',
  onDelete: 'NO ACTION',
  foreignKey: {
    name: 'idProduct',
    allowNull: false,
    field: 'id_product',
  },
});

export default OrdersProducts;
