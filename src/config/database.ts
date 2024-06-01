import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('NodeTSApi', 'postgres', 'thelizard23', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

export default sequelize;