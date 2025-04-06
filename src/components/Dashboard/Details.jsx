import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import axios from 'axios';
import Sidebar from './Sidebar2';
import Header from './Header';
import axios from 'axios';
export default function Details() {

  const [job, setJob] = useState({
    title: '',
    description: '',
    domain: '',
    duration: '',
    salaryRange: {
      min: '',
      max: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedJob = {};
  
    if (name === "description") {
      updatedJob = {
        ...job,
        description: value,
      };
    } else if (name.startsWith("salary")) {
      updatedJob = {
        ...job,
        salaryRange: {
          ...job.salaryRange,
          [name === "salaryMin" ? "min" : "max"]: value,
        },
      };
    } else {
      updatedJob = {
        ...job,
        [name]: value,
      };
    }
  
    setJob(updatedJob);
  };
  
  
  

  const handleSubmit = async (event) => {
    event.preventDefault();

      // Perform validation checks
        // Validate form fields
  if (!validateFormFields()) {
    return; // Exit the function early if validation fails
  }
    


    try {

    const response = await axios.post('http://localhost:3000/jobs/', job);


      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      alert("Data inserted Successfully");
      // Reset the form after successful submission
      setJob({
        title: '',
        description: '',
        domain: '',
        duration: '',
      
      });
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      // Handle errors appropriately, e.g., show an error message to the user
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
    

      const validateFormFields = () => {
        let isValid = true;

            // Check if all fields are filled
    if (!job.title || !job.duration || !job.domain || !job.description) {
      toast.error("Please fill all fields.");
      return false;
    }

      
        // Check if job title is empty or contains only digits
        if (!job.title.trim() || /^\d+$/.test(job.title)) {
          isValid = false;
          toast.error("Job title is required and cannot be entirely numeric.");
        }
      
        // Check if job duration is empty or less than 1
        if (!job.duration || job.duration <= 0) {
          isValid = false;
          toast.error("Job duration is required and must be greater than zero.");
        }
      
        // Check if job domain is empty
        if (!job.domain.trim() || /^\d+$/.test(job.domain)) {
          isValid = false;
          toast.error("Job domain is required and cannot be entirely numeric..");
        }
      
        // Check if job description is empty
        if (!job.description.trim() || /^\d+$/.test(job.description)) {
          isValid = false;
          toast.error("Job description is required and cannot be entirely numeric.");
        }
      
        // Additional validations can be added here as needed
      
        return isValid;
      };
      
      

  return (
    <>

        <section className="flex h-screen bg-white dark:bg-white-900">
        <Sidebar  menu={menuOpen} />
        <Header toggleMenu={toggleMenu} />
            
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">

              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-black">Add a new Job</h2>
              <form action="#" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div className="sm:col-span-2">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Job Title</label>
                    <input type="text" name="title" id="title" className="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Job Title" required="" value={job.title}
                      onChange={handleChange} />
                  </div>
                  <div className="w-full">
                    <label htmlFor="duration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Duration</label>
                    <input type="number" name="duration" id="duration" className="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Job Duration" required="" value={job.duration}
                      onChange={handleChange} />
                  </div>
                  <div className="w-full">
                    <label htmlFor="domain" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Domain</label>
                    <input type="text" name="domain" id="domain" className="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Job Domain" required="" value={job.domain}
                      onChange={handleChange} />
                  </div>
                 

                  <div className="sm:col-span-2">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Description</label>
                    <textarea id="description" name="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Job description here" value={job.description} onChange={handleChange}></textarea>
                  </div>
                </div>
                <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800" >
                  Add Job
                </button>
              </form>
            </div>
        
        </section>

      


    </>
  );
}



