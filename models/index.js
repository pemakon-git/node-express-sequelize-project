const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load models
db.User = require('./user')(sequelize, DataTypes);
db.Wallet = require('./wallet')(sequelize, DataTypes);
// (เพิ่ม models อื่นๆ ได้)

// ตั้ง associate หลังจาก load model ทั้งหมดแล้ว
Object.values(db).forEach(model => {
  if (model.associate) {
    model.associate(db);
  }
});

module.exports = db;
