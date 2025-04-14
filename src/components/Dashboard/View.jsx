/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar2';
import Header from './Header';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function View() {
  const [jobs, setJobs] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [updateId, setUpdateId] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  // State for form fields
  const [updatedJob, setUpdatedJob] = useState({
    _id: '',
    title: '',
    description: '',
    domain: '',
    duration: '',
  });

  // Toggle function
  const toggleDropdown = (jobId) => {
    setDropdownOpen(prevState => ({ ...prevState, [jobId]: !prevState[jobId] }));
  };

  

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/jobs/');
      setJobs(response.data);
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    }
  };
  const toggleModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.classList.toggle('hidden');
  };

  const handleUpdateClick = (jobId) => {
    const job = jobs.find((j) => j._id === jobId);
    setUpdatedJob({
      _id: job._id,
      title: job.title,
      description: job.description,
      domain: job.domain,
      duration: job.duration,
      // salaryRange: job.salaryRange ? {
      //  min: job.salaryRange.min,
      //  max: job.salaryRange.max
      //} : null //Set to null or another appropriate default value if salaryRange is undefined
    });
    toggleModal('updateProductModal'); // Set the updateId to the current job's ID
  };


  const handleDeleteClick = async (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        const response = await axios.delete(`http://localhost:3000/jobs/${id}`);
        toast.success('Job Deleted Successfully');
        setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
      } catch (error) {
        toast.error('Error Deleting Job');
        console.error('Error deleting job:', error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedJob((updatedJob) => ({
      ...updatedJob,
      [name]: value
    }));
  };

  // Corrected handleSearch function
  const handleSearch = (event) => {
    if (event && event.target) {
      const query = event.target.value;
      setSearchQuery(query);
      const filtered = currentJobs.filter(job =>
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.domain.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredJobs(filtered); // Filter the currentJobs array
    }
  };
  

  // Add useEffect to listen for changes in searchQuery
  useEffect(() => {
    handleSearch(searchQuery); // Call handleSearch whenever searchQuery changes
  }, [searchQuery]);


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust this value based on your preference
  const totalPages = Math.ceil(jobs.length / itemsPerPage);
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePrev = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
  };

  const handleNext = () => {
    setCurrentPage(currentPage < totalPages ? currentPage + 1 : currentPage);
  };



  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    const updatedJobData = {
      title: updatedJob.title,
      duration: updatedJob.duration,
      domain: updatedJob.domain,
      description: updatedJob.description,

    };
    try {
      const response = await axios.put(`http://localhost:3000/jobs/${updatedJob._id}`, updatedJobData);
      console.log('Updated job:', response.data);
      toast.success('Data Updated Successfully');
      //   alert("");
      setJobs((prevJobs) => prevJobs.map((job) => (job._id === updatedJob._id ? { ...job, ...updatedJobData } : job)));
    } catch (error) {
      toast.error('Error Updating Job')
      console.error('Error updating job:', error);
    }
  };
  return (

    <>

      <section className="flex h-screen bg-gray-50 dark:bg-white-90">

        <Sidebar menu={menuOpen} />
        <Header toggleMenu={toggleMenu} />
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <h1 className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"></h1>
          <div className="bg-white dark:bg-white-800 relative shadow-md sm:rounded-lg overflow-hidden ">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <h1>JOB DETAILS</h1>
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">Search</label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-white-50 border border-white-300 text-black-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="" value={searchQuery}
                      onChange={handleSearch} />
                  </div>
                </form>
              </div>

            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-black-500 dark:text-black-400">
                <thead className="text-xs text-black-700 uppercase bg-white-50 dark:bg-white-700 dark:text-black-400">
                  <tr>
                    <th scope="col" className="px-4 py-4">Title</th>
                    <th scope="col" className="px-4 py-3">Description</th>
                    <th scope="col" className="px-4 py-3">Duration</th>
                    <th scope="col" className="px-4 py-3">Domain</th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentJobs.map((job) => (
                    <tr className="border-b dark:border-gray-700" key={job._id}>
                      <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-black">{job.title}</th>
                      <td className="px-4 py-3 max-w-[12rem] truncate">{job.description}</td>
                      <td className="px-4 py-3">{job.duration}</td>
                      <td className="px-4 py-3">{job.domain}</td>
                      <td className="px-4 py-3 flex items-center justify-end">
                        <button onClick={() => toggleDropdown(job._id)} id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center text-sm font-medium hover:bg-white-100 dark:hover:bg-white-700 p-1.5 dark:hover-bg-white-800 text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-white-400 dark:hover:text-white-100" type="button">
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </button>
                        <div id="apple-imac-27-dropdown" className={`${dropdownOpen[job._id] ? '' : 'hidden'} z-10 w-44 bg-white rounded divide-y divide-white-100 shadow dark:bg-white-700 dark:divide-gray-600`}>
                          <ul className="py-1 text-sm" aria-labelledby="apple-imac-27-dropdown-button">
                            <li>
                              <button type="button" onClick={() => handleUpdateClick(job._id)} data-modal-target="updateProductModal" data-modal-toggle="updateProductModal" className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-black-200">
                                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                                </svg>
                                Edit
                              </button>
                            </li>

                            <li>
                              <button type="button" onClick={() => handleDeleteClick(job._id)} data-modal-target="deleteModal" data-modal-toggle="deleteModal" className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 text-red-500 dark:hover:text-red-400">
                                <svg className="w-4 h-4 mr-2" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z" />
                                </svg>
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
            <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
    {/* Previous Button */}
    <a href="#"onClick={handlePrev} className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Previous</span>
        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
    </a>
    {/* Pagination Links */}
    {[...Array(totalPages)].map((e, i) => (
        <a href="#" key={i} className={`flex items-center justify-center text-sm py-2 px-3 leading-tight ${currentPage === i + 1 ? 'bg-primary-50 border-primary-300' : 'text-gray-500 border border-gray-300'} hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
        </a>
    ))}
    {/* Next Button */}
    <a href="#" onClick={handleNext} className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Next</span>
        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
    </a>
</nav>

          </div>
        </div>

      </section>



      <div id="updateProductModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-2xl max-h-full">

          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">

            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Update JOB</h3>
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="updateProductModal" onClick={() => toggleModal('updateProductModal')}>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <form onSubmit={handleUpdateSubmit}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={updatedJob.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="duration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Duration
                  </label>
                  <input
                    type="number"
                    name="duration"
                    id="duration"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={updatedJob.duration}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="domain" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Duration
                  </label>
                  <input
                    type="text"
                    name="domain"
                    id="domain"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={updatedJob.domain}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    rows="5"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={updatedJob.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  Update job
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>



    </>
  );
}