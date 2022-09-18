const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobsSchema = new Schema({
  jobId: {
    type: Number,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  jobLocation: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
  },
  jobLevel: {
    type: String,
    required: true,
  },
  jobPost: {
    type: String,
    required: true,
  },
  jobProvider:{
    type: String,
    required: true,
  },
  salary:{
    type:  String,
    required:true,
  }
});

module.exports = mongoose.model("Jobs", jobsSchema);

// books
