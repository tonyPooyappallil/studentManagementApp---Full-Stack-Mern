const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://tonyPooyappallil:b4UP%21xBaUvEsN9X@cluster0.bqayn.mongodb.net/studentManagement"
  );
};

module.exports = connect;
