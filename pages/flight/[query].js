import { useRouter } from 'next/router';

function FlightDetails({ results }) {
 
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  } 

  return (
    <div>
  

      <h1>Loading...</h1>
      <li>Flight Details Api</li>
      <ul>
            {results.map(result => {
            return(
            <li key={result.status}>
              <a href={result.regn_number} target="_blank" rel="noopener norefferer">
                {result.flight_number}
              </a>

            </li>)
          })}
        </ul>

   
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { query: '' } },
      // { params: { query: 'flight456' } },
      // { params: { query: 'flight789' } },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ query }) {
  const API_KEY = '2b29f6a6-8b74-4977-9e9d-c51d51e60cc5';
  const res = await fetch(`https://airlabs.co/api/v9/flights?api_key=${API_KEY}&flag=IT`);
  const data = await res.json();

  return {
    props: {
        results : data.response
    },
  };
}

export default FlightDetails;
