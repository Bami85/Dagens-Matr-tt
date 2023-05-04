import Image from 'next/image'
import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { Fragment, useState } from 'react'
import ToDo from '../components/ToDoForm'
import { v4 as uuidv4 } from 'uuid'

uuidv4()

export default function Home({ product }) {
  // const [cart, setCart] = useState([])

  const [todos, setTodos] = useState([])
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState('') // Sökkriteriet
  const [selectedDay, setSelectedDay] = useState('')
  const [suggestedFood, setSuggestedFood] = useState('')

  const [addFood, setAddfood] = useState([])
  const [temporaryFood, setTemporaryFood] = useState()

  // const addTodo = todo => {
  //   setTodos([...todos,{id:uuidv4(), task:todos,completed:false, isEditing:false}])
  //   console.log(todos)
  // }

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  // Addfood function
  const AddNewFood = (text, imageUrl) => {
    const newFood = {
      text: text,
      image: imageUrl,
    }
    setAddfood([...addFood, newFood])
  }

  // useEffect for att sätta setTemporary food
  useEffect(() => {
    console.log(addFood)
  }, [addFood])

  useEffect(() => {
    // Effettua una chiamata API per ottenere un cibo correlato al giorno della settimana selezionato
    const fetchSuggestedFood = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/food/products/search?query=${selectedDay}&number=4`,
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
  }, [query, selectedDay])

  const handleSearch = (event) => {
    event.preventDefault()
    // Uppdatera sökfrågan baserat på användarens inmatning
    setQuery(event.target.query.value)
  }
  const handleDaySelect = (day) => {
    setSelectedDay(day)
  }

  // const addToCart = (product)=>{
  //   const cartCopy= [...cart]
  //   const itemIncart= cartCopy.find(i=>i.name===product.name)
  //   if(itemIncart){
  //     itemIncart.quantity +=1
  //     setCart(cartCopy)
  //   }else {
  //     setCart(prevCart=>[...prevCart, {...product, quantity:1}])
  //   }
  // }

  // const increase = name=>{
  //   const cartCopy= [...cart]
  //   const product= cartCopy.find(i =>i.name === name)
  // }

  // const decrease = name=>{
  //   let cartCopy= [...cart]
  //   const product= cartCopy.find(i =>i.name === name)
  //   if(product.quantity >1){
  //     product.quantity -=1
  //   } else {
  //     cartCopy = cartCopy.filter(i =>i.name !==name)
  //   }
  //   setCart(cartCopy)

  // }

  return (
    <div class="relative w-full">
      <nav class="fixed z-10 w-full bg-white md:absolute md:bg-transparent">
        <div class="container m-auto px-2 md:px-12 lg:px-7">
          <div class="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
            <div class="w-full px-6 flex justify-between lg:w-max md:px-0">
              <button
                aria-label="humburger"
                id="hamburger"
                class="relative w-10 h-10 -mr-2 lg:hidden"
              >
                <div
                  aria-hidden="true"
                  id="line"
                  class="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  class="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"
                ></div>
              </button>
            </div>

            <div class="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
              <div class="text-gray-600 lg:pr-4">
                <ul class="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
                  <li>
                    <a
                      href="#"
                      class="block md:px-4 transition hover:text-yellow-700"
                    >
                      <span>On|Line|Restaurang</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block md:px-4 transition hover:text-yellow-700"
                    >
                      <span>Önskelista</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block md:px-4 transition hover:text-yellow-700"
                    >
                      <span>Cart</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="w-full space-y-2 border-yellow-200 lg:space-y-0 md:w-max lg:border-l">
                <button
                  type="button"
                  title="Start buying"
                  class="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
                >
                  <span class="block text-yellow-800 font-semibold text-sm">
                    Sign up
                  </span>
                </button>
                <button
                  type="button"
                  title="Start buying"
                  class="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
                >
                  <span class="block text-yellow-900 font-semibold text-sm">
                    Login
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="relative bg-yellow-50">
        <div class="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
          <div class="flex items-center flex-wrap px-2 md:px-0">
            <div class="relative lg:w-6/12 lg:py-24 xl:py-32">
              <h1 class="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">
                Dina favoriträtter
              </h1>
              <form onSubmit={handleSearch} className="">
                <input
                  type="text"
                  name="query"
                  placeholder="Sök efter en produkt..."
                  className="px-4 py-2 border border-gray-100 m-[-0.5rem]"
                />
                <button
                  type="submit"
                  className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
                >
                  Sök
                </button>
              </form>
            </div>
            {/* add food form  */}
            <div className="mt-4 sm:mt-6">
              <input
                type="text"
                value={temporaryFood}
                placeholder="Sätt en ny produkt..."
                onChange={(e) => {
                  setTemporaryFood(e.target.value)
                }}
                className="px-4 py-2 border border-gray-100 m-[-0.5rem]"
              />
              <button
                className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
                onClick={() => {
                  AddNewFood(temporaryFood)
                  setTemporaryFood('')
                }}
              >
                Sätt
              </button>
            </div>
          </div>
          {/* // to do form här */}
          {/* <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
            <h2>Products</h2>

            {products &&
              products.map((product) => (
                <div key={product.name}>
                  <h1>{product.description}</h1>
                  <p1>{product.price}</p1>
                  <button onClick={() => addToCart(product)}>
                    Add products
                  </button>
                </div>
              ))}
          </div> */}

          {/* // Increase button  */}
          {/* <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
            <h2>Cart</h2>

            {products &&
              products.map((product) => (
                <div key={product.name}>
                  <button onClick={() => increase(product.name)}>
                    Increase
                  </button>
                  <button onClick={() => decrease(product.name)}>
                    Decrease
                  </button>

                  <p1>Subtotal:{product.quantity * product.price}</p1>
                </div>
              ))}
          </div> */}

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
                {suggestedFood && (
                  <p>Daily food suggestion : {suggestedFood}</p>
                )}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
              {/* New Maträtt  */}
              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                {/* {addFood && addFood.map((foods,index)=>{
               return(
                <div key={index}>
                <h2>{foods.text}</h2>
                <img src={foods.image} alt={foods.text} />
              </div>
               )
             })} */}
                <div>
                  {temporaryFood && <p>Your recept for today <br/> {temporaryFood}</p>}
                  {addFood.map((food, index) => (
                    <div key={index}>
                      <h2>{food.text}</h2>
                      <img src={food.image} alt={food.text} />
                    </div>
                  ))}
                </div>
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

        </div>
      </div>
    </div>
  )
}
