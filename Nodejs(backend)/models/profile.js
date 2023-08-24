// models/profile.js
const Sequelize = require('sequelize');
const sequelize = require('../config/database'); // Create the database connection in this file

const Profile = sequelize.define('profile', {
  name: Sequelize.STRING,
  location: Sequelize.STRING,
  about: Sequelize.TEXT,
  bio: Sequelize.TEXT,
  followerCount: Sequelize.INTEGER,
  connectionCount: Sequelize.INTEGER,
  bioLine: Sequelize.STRING,
});

module.exports = Profile;
