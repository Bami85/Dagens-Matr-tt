// api/skyscanner.js

import axios from 'axios';

const apiKey = 'FxXHZrdzVLdFM7NyVyZgbZ8ZqL_Yt-ex'; // Replace with your Skyscanner API key

// Search flights
export default function searchFlights = (origin, destination, departureDate, returnDate)=> async

 
 {
  try {
    const response = await axios.get('https://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/US/USD/en-US/', {
      params: {
        apiKey,
        origin,
        destination,
        outboundDate: departureDate,
        inboundDate: returnDate,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching flights:', error);
    return null;
  }
};

// Get flight prices
export const getFlightPrices = async (quoteId) => {
  try {
    const response = await axios.get(`https://partners.api.skyscanner.net/apiservices/pricing/uk2/v1.0/${quoteId}`, {
      params: {
        apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting flight prices:', error);
    return null;
  }
};


export default searchFlights()