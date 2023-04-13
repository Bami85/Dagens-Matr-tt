import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'

import { Fragment, useState } from 'react'

export default function Example() {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState('') // Sökkriteriet
  const [selectedDay, setSelectedDay] = useState('')
  const [suggestedFood, setSuggestedFood] = useState('')

  useEffect(() => {
    // Effettua una chiamata API per ottenere un cibo correlato al giorno della settimana selezionato
    const fetchSuggestedFood = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/food/products/search?query=${selectedDay}&number=1`,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-API-Key': '94503ca481d649bea8a5f8917aeb0c44',
            },
          },
        )
        const data = await response.json()
        setSuggestedFood(data.products[0]?.title || '')
      } catch (error) {
        console.error('Error fetching suggested food:', error)
      }
    }

    // Esegui la chiamata API solo se è stato selezionato un giorno della settimana
    if (selectedDay) {
      fetchSuggestedFood()
    }
  }, [selectedDay])

  useEffect(() => {
    // Utilizza il valore di selectedDay nella chiamata API
    fetch(
      `https://api.spoonacular.com/food/products/search?query=${query}&day=${selectedDay}&number=8`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': '94503ca481d649bea8a5f8917aeb0c44',
        },
      },
    )
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching product data:', error))
  }, [query, selectedDay]) // Aggiungi selectedDay come dipendenza dell'effetto

  const handleSearch = (event) => {
    event.preventDefault()
    // Uppdatera sökfrågan baserat på användarens inmatning
    setQuery(event.target.query.value)
  }
  const handleDaySelect = (day) => {
    setSelectedDay(day)
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
            <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8"></div>
          </section>
        </div>

        <section aria-labelledby="trending-heading">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
            <div className="md:flex md:items-center md:justify-between">
              <h1>Food of the day suggestion</h1>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
              >
                <option value="">Select a day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
              {suggestedFood && <p>Daily food suggestion : {suggestedFood}</p>}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
              {products &&
                products.map((product) => (
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
