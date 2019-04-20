'use strict';
module.exports = (mongodb, DataTypes) => {
  const steakhouses = mongodb.define(
    'steakhouses',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Name: DataTypes.STRING
    }
  );
  return steakhouses;
};
