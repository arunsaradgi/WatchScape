const mongoose = require("mongoose");

//schema

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    re_entered_password: { type: String },
  },
  {
    versionKey: false,
  }
);

//models

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
