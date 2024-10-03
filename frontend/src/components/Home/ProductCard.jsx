import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

function ProductCard({ product }) {

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      discountPrice: product.discountPrice
    }))
  }

  return (
    <div className="hover:scale-105 border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 ease-in-out p-4 bg-white">
      {/* Product Image */}
      <div className="relative group">
        {/* Discount Label */}
        <div className="absolute top-2 left-2 bg-red-500 text-white font-semibold text-xs px-2 py-1 rounded">
          {`${product.discountPercentage}% off`}
        </div>

        <img
          className="w-full aspect-square object-cover rounded-lg"
          src={`http://localhost:3000/${product.image}`}
          alt={product.name}
        />

        {/* Add to Cart Button - Hover Effect */}
        <div
          className="absolute bottom-0 opacity-0 w-full translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
        >

        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <div className='flex justify-between flex-wrap'>
          <div className="flex justify-center items-center gap-2 mt-2">
            <span className="text-gray-500 line-through">Rs.{product.price}</span>
            <span className="text-red-600 text-lg font-bold">Rs.{product.discountPrice}</span>
          </div>
          <div className="flex items-center justify-between">
            <a
              onClick={handleAddToCart}
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProductCard;
