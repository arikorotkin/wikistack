const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false // name MUST have a value
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

const Page = db.define('page' {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content:{
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open','closed'),
    allowNull: false,
    defaultValue: 'closed'
  }
})

module.exports = { Page, User};
