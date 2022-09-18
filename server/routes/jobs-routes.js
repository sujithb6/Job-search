const express = require("express");
const router = express.Router();
const jobsController = require("../controllers/jobs-controller");

router.get("/", jobsController.getAllJobs);
router.post("/", jobsController.addJobs);
router.get("/:id", jobsController.getById);
router.put("/:id", jobsController.updateJobs);
router.delete("/:id", jobsController.deleteJobs);

module.exports = router;
