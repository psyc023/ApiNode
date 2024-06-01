import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Person extends Model {
  public id!: number;
  public nombre!: string;
  public apellido_paterno!: string;
  public apellido_materno!: string;
  public estado!: string;
}

Person.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido_paterno: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido_materno: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Person',
  tableName: 'persons',
  timestamps: false
});

export default Person;
