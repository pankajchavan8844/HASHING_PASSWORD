// services/user.js
const User = require('../model/app.model');
async function createUser(username, password) {
  const user = new User({ username, password });
  await user.save();
  return user;
}

async function getUser() {
  return User.find()
}

async function updateUser(id, updates) {
  return User.findByIdAndUpdate(id, updates, { new: true });
}

async function deleteUser(id) {
  return User.findByIdAndDelete(id);
}

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser
};
