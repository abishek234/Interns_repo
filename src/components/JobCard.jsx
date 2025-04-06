import "./CSS/Job.css";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import jobsearch from "./assets/job-search.svg";
export default function JobCard({ job }) {
  return (
    // <div className="job-card">
    //   <h3>Title :{job.title}</h3>
    //   <p>Description  : {job.description}</p>
    //   <p>Domain:{job.domain}</p>
    //   <p>Duration: {job.duration} months</p>
    //   <p>Salary Range: ${job.salaryRange.min} - ${job.salaryRange.max}</p>
    // </div>
    <section id="advertisers" className="advertisers-service-sec pt-5 pb-5 grid  ">
       
      <div className="container">
        <div className="row">
          
        </div>
        <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">


          <div className="col">
            <div className="serviced-card">
              <div className="icon-wrapper">
                <i><img src={jobsearch} /></i>
              </div>
              <h3>{job.title}</h3>
              <p>Description  : {job.description}</p>
              <p>Domain:{job.domain}</p>
              <p>Duration: {job.duration} months</p>
              <Link to={`/form`} className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Apply Now
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

JobCard.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    salaryRange: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

// <div className="job-card">
//   <h3>Title :{job.title}</h3>
//   <p>Description  : {job.description}</p>
//   <p>Domain:{job.domain}</p>
//   <p>Duration: {job.duration} months</p>
//   <p>Salary Range: ${job.salaryRange.min} - ${job.salaryRange.max}</p>
// </div>
