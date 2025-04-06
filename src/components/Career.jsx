/* eslint-disable no-unused-vars */
import Navbar from "./Navbar";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from "./ui/Footer";
import service1 from "./assets/service1.png";


export default function Career() {
    const [domains, setDomains] = useState([]);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetching domains
                const domainsResponse = await axios.get('http://localhost:3000/jobs/domains'); // Adjust URL to your actual API endpoint
                setDomains(domainsResponse.data);

                // Fetching jobs
                const jobsResponse = await axios.get('http://localhost:3000/jobs/');
                setJobs(jobsResponse.data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <div className="my-8"></div>
            
            {domains.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-8">
                    {domains.map((domain) => (
                        <div key={domain.domain} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700 p-4 my-8">
                            <a href="#">
                                <img className="rounded-t-lg" src={service1} alt="" />
                            </a>
                            
                            <h5 className="text-2xl font-bold text-gray-900 dark:text-Black">{domain.domain}</h5>
                            
                            <Link to={`/jobs/${encodeURIComponent(domain.domain)}`} className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Apply Now
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Loading...</div>
            )}
            <Footer />
        </>
    );
}
