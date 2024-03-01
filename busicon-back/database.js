const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURI = 'mongodb+srv://20bcs244:vvsdc@cluster0.xxkpzqk.mongodb.net/';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose.connection;
