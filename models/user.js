module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    user_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    created_at: DataTypes.DATE
  }, {
    tableName: 'users',
    timestamps: false
  });

  User.associate = (models) => {
    User.hasMany(models.Wallet, { foreignKey: 'user_id' });
  };

  return User;
};
