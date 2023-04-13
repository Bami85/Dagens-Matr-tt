
import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'

import { Fragment, useState } from 'react'

export default function Example() {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState('') // Sökkriteriet

  useEffect(() => {
    // Hämta produktdata från Spoonacular API baserat på sökfrågan
    fetch(
      `https://api.spoonacular.com/food/products/search?query=${query}&number=8`,
      {
        headers: {
          'Content-Type': 'application/json',
          // Lägg till din API-nyckel här
          'X-API-Key': '94503ca481d649bea8a5f8917aeb0c44',
        },
      },
    )
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching product data:', error))
  }, [query])

  const handleSearch = (event) => {
    event.preventDefault()
    // Uppdatera sökfrågan baserat på användarens inmatning
    setQuery(event.target.query.value)
  }

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <main>
        {/* Hero section */}
        <div className="relative">
          {/* Background image and overlap */}
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden sm:flex sm:flex-col"
          >
            <div className="relative w-full flex-1 bg-gray-800">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMG4WHGZGb1RFz8s_Vf4oB5S4jcORwWA0uaw&usqp=CAU"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
          </div>

          <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
            {/* Background image and overlap */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex flex-col sm:hidden"
            >
              <div className="relative w-full flex-1 bg-gray-800">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gray-900 opacity-50" />
              </div>
              <div className="h-48 w-full bg-white" />
            </div>
            <div className="relative py-32">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Dagens Maträtt
              </h1>
              <div className="mt-4 sm:mt-6">
                <form onSubmit={handleSearch} className="">
                  <input
                    type="text"
                    name="query"
                    placeholder="Sök efter en produkt..."
                    className="px-4 py-2 border border-gray-100 m-[-0.5rem]"
                  />
                  <button
                    type="submit"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Sök
                  </button>
                </form>
              </div>
            </div>
          </div>

          <section
            aria-labelledby="collection-heading"
            className="relative -mt-96 sm:mt-0"
          >
            <h2 id="collection-heading" className="sr-only">
              Collections
            </h2>
            <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
            </div>
          </section>
        </div>

        <section aria-labelledby="trending-heading">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
            <div className="md:flex md:items-center md:justify-between">
              <h2
                id="favorites-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                Trending Products
              </h2>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {products && products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-8 text-sm md:hidden">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Shop the collection
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
