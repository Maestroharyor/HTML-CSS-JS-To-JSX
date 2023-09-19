import { useState } from "preact/hooks";

type Props = {
  name: string;
  image: string;
  price: number;
};
function ProductCard({ name, image, price }: Props) {
  const [quantity, setQuantity] = useState(0);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

  const increaseCartQuantity = () => {
    setQuantity(quantity + 1);
  };

  const reduceQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      alert("Item is not in cart");
    }
  };

  const toggleWishlist = () => {
    setIsAddedToWishlist(!isAddedToWishlist);
  };

  return (
    <div
      className={`group relative block overflow-hidden max-w-[400px] w-full rounded`}
    >
      <button
        className={`absolute right-4 top-4 z-10 rounded-full  p-1.5 text-gray-900 transition hover:text-gray-900/75 wishlist ${
          isAddedToWishlist ? "bg-yellow-500" : "bg-white"
        }`}
        onClick={toggleWishlist}
      >
        <span className="sr-only">Wishlist</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>
      <img
        src={image}
        alt=""
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />
      <div className="relative border border-gray-100 bg-white p-6">
        <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
          New
        </span>
        <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>
        <p className="mt-1.5 text-sm text-gray-700">${price}</p>
        <div className="inline-flex items-center mt-2 justify-center w-full">
          <button
            className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
            onClick={reduceQuantity}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12H4"
              />
            </svg>
          </button>
          <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
            {quantity}
          </div>
          <button
            className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
            onClick={increaseCartQuantity}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4">
          <button
            className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 add_to_cart"
            onClick={increaseCartQuantity}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
