module.exports = function(sequelize, DataTypes) {
    var Author = sequelize.define("Author", {
      author_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      nationality: {
        type: DataTypes.STRING,
        validate: {
          len: [1]
        }
      }
    });
    return Author;
  };
  