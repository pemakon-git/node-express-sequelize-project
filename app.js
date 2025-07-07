const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const userRoutes = require('./routes/userRoutes'); // หรือชื่อ route อื่นที่คุณสร้างไว้

const app = express();
app.use(bodyParser.json());

// ใช้งาน route
app.use('/api', userRoutes);

// ซิงค์ database และรัน server
db.sequelize.sync().then(() => {
  app.listen(3333, () => {
    console.log("🚀 Server running at http://localhost:3333/api/users");
  });
});
