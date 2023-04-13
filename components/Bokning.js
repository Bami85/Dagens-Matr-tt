// components/BookingForm.js
import React from 'react';

const BookingForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Book Your Travel</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="destination" className="block font-medium text-gray-800">Destination</label>
            <input
              type="text"
              id="destination"
              name="destination"
              className="w-full mt-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="E.g. Bali, Paris, New York"
            />
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label htmlFor="check-in" className="block font-medium text-gray-800">Check-in</label>
              <input
                type="date"
                id="check-in"
                name="check-in"
                className="w-full mt-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="check-out" className="block font-medium text-gray-800">Check-out</label>
              <input
                type="date"
                id="check-out"
                name="check-out"
                className="w-full mt-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="guests" className="block font-medium text-gray-800">Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              className="w-full mt-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Number of guests"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
          >
            Search Hotels
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
