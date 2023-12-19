// routes/user.js
const express = require('express');
const userService = require('../service/app.service');

const router = express.Router();

router.post('/users', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userService.createUser(username, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/get', async (req, res) => {
  try {
    const user = await userService.getUser();
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const user = await userService.updateUser(id, updates);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json({
        massage:"updated successfuly",
        data:user
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.deleteUser(id);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
        res.send({
            data:user,
            message:"Deleted"
        })
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
