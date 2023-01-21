const sequelize = require('../config/connection');
const profile = require('../models/profile');
const profileData = require('./profile-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await profile.bulkCreate(profileData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();