// index.js
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./router/app.router');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/HashingPassword', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("connected to database");
});

// Middleware
app.use(express.json());

// Routes
app.use(userRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
