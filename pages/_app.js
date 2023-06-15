


// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

// import Head from 'next/head';
// import 'tailwindcss/tailwind.css';
// function MyApp({Component, pageProps}) {
// 	return (
// 		<>
// 			<Head>
// 				<title>RapidAPI - Flights App</title>
// 				<link rel="icon" href="/favicon.ico" />
// 				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;800&display=swap" />
			
					
	
// 			</Head>
// 			<Component {...pageProps} />;
// 		</>
// 	);
// }
// export default MyApp;

import React from 'react'
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
export default function App({Component, pageProps}) {
  return (
		<>
         <Head>
			 
		 </Head>
   

			<Component {...pageProps} />;
		</>
  )
}
