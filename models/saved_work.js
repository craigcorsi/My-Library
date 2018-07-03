module.exports = function(sequelize, DataTypes) {
    var SavedWork = sequelize.define("SavedWork", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      author_id: {
        type: DataTypes.INTEGER
      },
      genre: {
        type: DataTypes.STRING,
        validate: {
          len: [1]
        }
      },
      notes: {
        type: DataTypes.TEXT
      },
      keyword: {
        type: DataTypes.STRING
      }
    });
    return SavedWork;
  };

  // Need to add foreign key for author_id