// models/Exhibition.js
module.exports = (sequelize, DataTypes) => {
    const Exhibition = sequelize.define('Exhibition', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    });
  
    // Exhibition.associate = (models) => {
        // console.log(models, `\n=============================\n models \n============================`)
    // };
  
    return Exhibition;
  };
  