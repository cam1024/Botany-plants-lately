const sequelize = require('../config/connection');
const { User,Plant } = require('../models');

const userData = require('./userData.json');
const postData = require('./plantData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Plant.bulkCreate(postData);

  process.exit(0);
};

seedDatabase();