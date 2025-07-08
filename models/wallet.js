module.exports = (sequelize, DataTypes) => {
  const Wallet = sequelize.define("Wallet", {
    wallet_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    user_id: DataTypes.UUID,
    currency_code: DataTypes.STRING,
    balance: DataTypes.DECIMAL
  }, {
    tableName: 'wallets',
    timestamps: false
  });

  Wallet.associate = (models) => {
    Wallet.belongsTo(models.User, { foreignKey: 'user_id', as: 'User' });
  };

  return Wallet;
};
