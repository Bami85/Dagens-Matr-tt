import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function ProductInCart({ product }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const cartCopy = [...cart]
    const itemInCart = cartCopy.find((item) => item.name === product.name)
    if (itemInCart) {
      // if the item is already in the cart, increase its quantity
      itemInCart.quantity += 1
    } else {
      // if the item is not in the cart, add it with a quantity of 1
      cartCopy.push({ ...product, quantity: 1 })
    }
    setCart(cartCopy)
  }

  const increase = (name) => {
    const cartCopy = [...cart]
    const itemInCart = cartCopy.find((item) => item.name === name)
    if (itemInCart) {
      // if the item is in the cart, increase its quantity
      itemInCart.quantity += 1
      setCart(cartCopy)
    }
  }

  const decrease = (name) => {
    const cartCopy = [...cart]
    const itemInCart = cartCopy.find((item) => item.name === name)
    if (itemInCart) {
      // if the item is in the cart and has a quantity greater than 1, decrease its quantity
      if (itemInCart.quantity > 1) {
        itemInCart.quantity -= 1
        setCart(cartCopy)
      } else {
        // if the item is in the cart and has a quantity of 1, remove it from the cart
        const itemIndex = cartCopy.findIndex((item) => item.name === name)
        cartCopy.splice(itemIndex, 1)
        setCart(cartCopy)
      }
    }
  }

  const [open, setOpen] = useState(true)

  return (

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-500 sm:bg-opacity-75 sm:transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center sm:items-center sm:px-6 lg:px-8">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-105"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-105"
            >
              <Dialog.Panel className="flex w-full max-w-3xl transform text-left text-base transition sm:my-8">
                <form className="relative flex w-full flex-col overflow-hidden bg-white pb-8 pt-6 sm:rounded-lg sm:pb-6 lg:py-8">
                  <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-40 object-cover mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <p className="text-gray-700 font-semibold">
                      {product.price}
                    </p>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-4 text-blue-500 hover:underline"
                    >
                      <button
                        onClick={() => addToCart(product)}
                        className="ml-4 font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-2"
                      >
                        Add products
                      </button>
                    </a>
                  </div>

                  <section aria-labelledby="cart-heading">
                  <div className="bg-white rounded-md shadow-md p-4">
                    
                        {/* Put images  as random
                         <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-40 object-cover mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                        <p className="text-gray-600 mb-2">{product.description}</p>
                        <p className="text-gray-700 font-semibold">{product.price}</p>
                        <a
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block mt-4 text-blue-500 hover:underline"
                        >
                          Läs mer
                        </a> */}
                      </div>
                    <h2 id="cart-heading" className="sr-only">
                      Items in your shopping cart
                    </h2>

                    <ul
                      role="list"
                      className="divide-y divide-gray-200 px-4 sm:px-6 lg:px-8"
                    >
                      {cart &&
                        cart.map((item) => (
                          <div key={item.name}>
                            <h1>{item.description}</h1>
                            <p1>{item.price}</p1>
                            <button onClick={() => addToCart(item)}>Add products</button>
                            {/* 
                            <p1>Subtotal:{cart.quantity * cart.price}</p1> */}
                          </div>
                        ))}
                    </ul>
                  </section>

                  <section
                    aria-labelledby="summary-heading"
                    className="mt-auto sm:px-6 lg:px-8"
                  >
                    <div className="bg-gray-50 p-6 sm:rounded-lg sm:p-8">
                      <h2 id="summary-heading" className="sr-only">
                        Order summary
                      </h2>

                      <div className="flow-root">
                        {cart &&
                          cart.map((item) => (
                            <div key={item.name}>
                              <button
                                onClick={() => increase(item.name)}
                                className="ml-4 font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-2"
                              >
                                {' '}
                                Increase{' '}
                              </button>
                              <button
                                onClick={() => decrease(item.name)}
                                className="ml-4 font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-2"
                              >
                                {' '}
                                Decrease{' '}
                              </button>
                              {item.quantity}

                              <p1>
                                Subtotal:
                                {(item.quantity * item.price).toFixed()}
                              </p1>
                            </div>
                          ))}
                      </div>
                    </div>
                  </section>

                  <div className="mt-8 flex justify-end px-4 sm:px-6 lg:px-8">
                    <button
                      type="submit"
                      className="rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
