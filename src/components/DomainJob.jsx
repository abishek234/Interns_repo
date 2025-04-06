
import JobCard from './JobCard';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
export default function DomainJobs({ jobs})  {
    const { domain } = useParams();
//     console.log("Domain:", domain);
// console.log("First job:", jobs[0]);

    // Assuming jobs is passed as a prop from parent component
    const filteredJobs = jobs.filter(job => job.domain === domain);

    // if (!Array.isArray(filteredJobs)) {
    //     console.error("filteredJobs is not an array");
    //     return null; // Or return a fallback UI
    //   }
      
    //   console.log("Number of jobs:", filteredJobs.length);
      

    return (
        <>
        <Navbar />
        <div className="my-8"></div> 
         {/* <h1>Displaying jobs for: {domain}</h1> */}
        <div className="jobs-container">
            {filteredJobs.map((job) => (
                <JobCard key={job._id} job={job} />
            ))}
        </div>
        </>
    );
}

DomainJobs.propTypes = {
    domain: PropTypes.string.isRequired,
    jobs: PropTypes.array.isRequired,
};
  

