import axios from 'axios';

const BASE_URL = 'https://accessvtuapi.com.ng/api/data/'; // Replace with actual URL from AccessVTU API docs

// Function to make an API request
export const getDataPlans = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      headers: {
        'Authorization': 'Token: t2BlyCCAzAa4BxAxDCqmxc6CAdk2BihA7cwAbG1FCB0s3d8ArnEg3C5CBpC2',
        "Content-Type": "application/json"
      },
    });
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('Error fetching data plans:', error);
    throw error; // Handle error appropriately
  }
};
