const User = require("../models/User");

exports.getUserByUsername = (username) =>User.findOne({ username }) // promise 

exports.register = (username, password) => User.create({ username, password }); // promise 
