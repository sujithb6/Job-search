const Jobs  = require("../model/Jobs");

const getAllJobs = async (req, res, next) => {
  let jobs;
  try {
    jobs = await Jobs.find();
  } catch (err) {
    console.log(err);
  }

  if (!jobs) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ jobs });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let jobs;
  try {
    jobs = await Jobs.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!jobs) {
    return res.status(404).json({ message: "No Jobs found" });
  }
  return res.status(200).json({ jobs });
};

const addJobs = async (req, res, next) => {
  const { jobId, jobTitle, jobDescription, jobLocation, available, jobLevel,jobPost,jobProvider,salary } = req.body;
  let jobs;
  try {
    jobs = new Jobs({
      jobId, jobTitle, jobDescription, jobLocation, available, jobLevel,jobPost,jobProvider,salary 
    });
    await jobs.save();
  } catch (err) {
    console.log(err);
  }

  if (!jobs) {
    return res.status(500).json({ message: "Unable To Add jobs" });
  }
  return res.status(201).json({ jobs });
};

const updateJobs = async (req, res, next) => {
  const id = req.params.id;
  const { jobId, jobTitle, jobDescription, jobLocation, available, jobLevel,jobPost,jobProvider,salary  } = req.body;
  let jobs;
  try {
    jobs = await Jobs.findByIdAndUpdate(id, {
      jobId, jobTitle, jobDescription, jobLocation, available, jobLevel,jobPost,jobProvider,salary 
    });
    jobs = await kobs.save();
  } catch (err) {
    console.log(err);
  }
  if (!jobs) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ jobs });
};


const deleteJobs = async (req, res, next) => {
  const id = req.params.id;
  let jobs;
  try {
    jobs = await Jobs.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!jobs) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllJobs = getAllJobs;
exports.addJobs = addJobs;
exports.getById = getById;
exports.updateJobs = updateJobs;
exports.deleteJobs = deleteJobs;
