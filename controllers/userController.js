const { User, Wallet } = require('../models');

exports.getUsersWithWallets = async (req, res) => {
  try {
    const users = await User.findAll({
      include: {
        model: Wallet,
        as: 'Wallets'
      }
    });

    const formatted = users.map(user => ({
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

    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
