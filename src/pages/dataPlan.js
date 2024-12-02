import React, { useState, useEffect } from 'react';
import { getDataPlans } from './api'; // Import the function from api.js

const DataPlans = () => {
  const [dataPlans, setDataPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const plans = await getDataPlans();
        setDataPlans(plans);
      } catch (error) {
        console.error("Error fetching data plans:", error);
      } finally {
        setLoading(false);
        console.log({"resp":dataPlans})
      }
    };

    fetchData();
  }, []); // Empty dependency array to run once on mount

  if (loading) return <div className='text-white text-xs mt-5'>Loading...</div>;

  return (
    <div>
      <h1 className='text-white text-xs mt-5'>Available Data Plans</h1>
      <ul>
        {dataPlans.map((plan) => (
          <li key={plan.id}>{plan.name}: {plan.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataPlans;
