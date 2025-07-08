const { v4: uuidv4 } = require('uuid');
const db = require('../models');
const { User, Wallet } = db;

async function seed() {
  // ลบและสร้างตารางใหม่
  await db.sequelize.sync({ force: true });

  // สร้าง user
  const user = await User.create({
    user_id: uuidv4(),
    username: "PemakonKH",
    email: "pemakon.vlr@gmail.com",
    password_hash: "hashed_password",
    created_at: new Date("2025-07-07T09:09:09.435Z")
  });

  // สร้าง wallet
  await Wallet.create({
    wallet_id: uuidv4(),
    user_id: user.user_id,
    currency_code: "BTC",
    balance: 100.13145
  });

  // ✅ ดึงข้อมูล user พร้อม wallet
  const usersWithWallets = await User.findAll({
    include: {
      model: Wallet,
      as: 'Wallets' // ต้องตรงกับ alias ใน associate
    }
  });

  // ✅ แสดงผลแบบ JSON ที่คุณต้องการ
  const formatted = usersWithWallets.map(user => ({
    user_id: user.user_id,
    username: user.username,
    email: user.email,
    password_hash: user.password_hash,
    created_at: user.created_at,
    wallets: user.Wallets.map(wallet => ({
      wallet_id: wallet.wallet_id,
      currency_code: wallet.currency_code,
      balance: wallet.balance
    }))
  }));

  console.log("users:", JSON.stringify(formatted, null, 2));
  process.exit();
}

seed().catch(console.error);
