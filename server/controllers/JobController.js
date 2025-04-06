import Job from '../models/Job.js';

const createJob = async (req, res) => {
    const job = new Job(req.body);
    try {
      await job.save();
      res.status(201).send(job);
    } catch (error) {
      res.status(400).send(error.message);
    }
}

const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find({});
        res.send(jobs);
      } catch (error) {
        res.status(500).send(error.message);
      }
}

const updateJob = async (req, res) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedJob) {
          return res.status(404).send('Job not found');
        }
        res.send(updatedJob);
      } catch (error) {
        res.status(500).send(error.message);
      }
}

const deleteJob = async (req, res) => {
    try {
        const deletedJob = await Job.findByIdAndDelete(req.params.id);
        
        if (!deletedJob) {
          return res.status(404).send('Job not found');
        }
      
      } catch (error) {
        res.status(500).send(error.message);
      }
}

const getJobDomain = async (req, res) => {
    try {
        const domainCounts = await Job.aggregate([
            {
                $addFields: {
                    normalizedDomain: { $toLower: '$domain' }
                }
            },
            {
                $group: {
                    _id: '$normalizedDomain',
                    count: { $sum: 1 },
                    originalDomain: { $first: '$domain' }
                }
            },
            {
                $project: {
                    _id: 0,
                    domain: '$originalDomain',
                    count: 1
                }
            }
        ]);

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(domainCounts));
    } catch (error) {
        console.error('Error fetching domain counts:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export default { createJob, getAllJobs, updateJob, deleteJob, getJobDomain };



