import React from 'react'
// import Layout from '../../components/Layout'
import Layout from '../../components/Layout'

export default function Dishes({results}) {
  return (
    <Layout>
      <h1>Top Dishes</h1>
    </Layout>
  )
}

API_KEY = "94503ca481d649bea8a5f8917aeb0c44"
export async function getStaticProps() {
     const URL = `https://api.spoonacular.com/food/api-key=${API_KEY}`
     const response = await fetch(URL)

     const data = await response.json()
     console.log(data.results)

    return {
        props:{
            results:data.results
        }
    }

}