import express from 'express';
const router = express.Router();
import JobController from '../controllers/JobController.js';

router.get('/', JobController.getAllJobs);
router.post('/', JobController.createJob);
router.put('/:id', JobController.updateJob);
router.delete('/:id', JobController.deleteJob);
router.get('/domains', JobController.getJobDomain);

export default router;