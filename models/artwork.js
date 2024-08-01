// models/Artwork.js
module.exports = (sequelize, DataTypes) => {
    const Artwork = sequelize.define('Artwork', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      artist: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
      },
    });
  

    return Artwork;
  };
  