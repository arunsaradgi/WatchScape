const express = require("express");
const { UserModel } = require("../models/users.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, password, re_entered_password } = req.body;

  const registerdUser = await UserModel.findOne({ email });

  if (registerdUser) {
    res.status(200).json({ msg: "User is registered , Please Login" });
  } else {
    if (password === re_entered_password) {
      bcrypt.hash(password, 5, async (err, hash) => {
        // Store hash in your password DB.
        if (err) {
          res.json({ msg: err.message });
        } else {
          const user = new UserModel({ name, email, password: hash });
          await user.save();
          res.json({ msg: "user is registered", user: req.body });
        }
      });
    } else {
      res.status(400).json({ msg: "re-entered password is not matching" });
    }
  }
});

userRouter.get("/login", async (req, res) => {
  const { email, password } = req.body;

  const userRegistered = await UserModel.findOne({ email });

  if (userRegistered) {
    try {
      bcrypt.compare(password, userRegistered.password, async (err, result) => {
        // result == true
        if (result) {
          const token = jwt.sign(
            {
              data: "foobar",
            },
            "userstoken",
            { expiresIn: "7d" }
          );
          res.json({ msg: `${userRegistered.name} logged In`, token });
        } else {
          res.json({ msg: "Please enter valid password" });
        }
      });
    } catch (error) {
      res.json({ error: error.message });
    }
  } else {
    res.status(400).json({ msg: "Please register before logging in" });
  }
});

module.exports = {
  userRouter,
};
