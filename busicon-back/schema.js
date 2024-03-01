const mongoose = require('mongoose');

// Define schema
const jobSchema = new mongoose.Schema({
  jobId: { type: String, required: true, unique: true },
  jobDescription: [String],
  jobTitle: { type: String, required: true },
  jobLocation: { type: String, required: true },
  jobRequired : [String]
});

// Create model from schema
const Job = mongoose.model('careers', jobSchema);

module.exports = Job;
