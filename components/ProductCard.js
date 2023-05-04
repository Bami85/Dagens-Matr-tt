
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4">
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
      </a>
    </div>
  );
};

export default ProductCard;

