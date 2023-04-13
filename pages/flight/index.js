
import Link from 'next/link'
import React,{useEffect,useState} from "react"




export default function News({ results }) {
  console.log("hej")
  console.log(results)
  const [flag, setFlag] = useState('');
  const [destination, setDestination] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Make API request with search parameters
    const API_KEY = '2b29f6a6-8b74-4977-9e9d-c51d51e60cc5';
    const URL = `https://airlabs.co/api/v9/flights?api_key=${API_KEY}&flag=FR`;
    const response = await fetch(URL);
    const data = await response.json();

    // Update results with API response
    // Update state or pass data to another function/component for rendering
    console.log(data.response);
  };
  return (
    <div>
  


        <h1>Top Resor</h1>
      <ul>
        {
          results.map((result, i) => {
            return (
              <li key={i}>
                <a href={result.flight_number} legacyBehavior>
                  {result.reg_number}
                </a>


              </li>)
          })}
      </ul>
  
 


      <h1>Top Resor</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Flag"
          value={flag}
          onChange={(e) => setFlag(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {/* Render search results here */}
      </ul>
      
    </div>
  )
}

const API_KEY = "2b29f6a6-8b74-4977-9e9d-c51d51e60cc5"
export async function getStaticProps() {
  const URL = `https://airlabs.co/api/v9/flights?api_key=${API_KEY}`
  const response = await fetch(URL)
  const data = await response.json()
  console.log(data.response)
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      results: data.response
    }
  }
}



