import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DashContent() {
  const [domainCounts, setDomainCounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDomainCounts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/jobs/domains');
        setDomainCounts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching domain counts:', error);
        console.log('Error response:', error.response.data);
        setError('Failed to fetch domain counts');
        setLoading(false);
      }
    };


    fetchDomainCounts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    
<>
<div className="flex flex-col items-center justify-start min-h-screen">
  <div className="w-full max-w-3xl grid grid-cols-3 gap-8 mt-20">
    {Array.isArray(domainCounts) && domainCounts.length > 0 ? (
      domainCounts.map((domainCount) => (
        <div className="rounded-lg shadow-sm p-10 bg-white shadow-lg relative overflow-hidden" key={domainCount._id}>
          <div className="text-center">
            <h4 className="text-sm uppercase text-gray-500 leading-tight">{domainCount.domain|| 'Unknown Domain'}</h4>
            <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">{domainCount.count}</h3>
          </div>
        </div>
      ))
    ) : (
      <div>No domain counts available.</div>
    )}
  </div>
</div>








</>
  );


}




