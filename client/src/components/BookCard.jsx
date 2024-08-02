// import React from "react";

// const BookCard = ({
//   title,
//   author,
//   description,
//   coverImage,
//   price,
//   rating,
// }) => {
//   return (
//     <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4">
//       <img className="w-full h-48 object-cover" src={coverImage} alt={title} />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{title}</div>
//         <p className="text-gray-700 text-base">{author}</p>
//         <p className="text-gray-600 text-sm mt-2">{description}</p>
//       </div>
//       <div className="px-6 py-4 flex justify-between items-center">
//         <span className="text-lg font-bold">${price}</span>
//         <span className="text-yellow-500">{rating} ★</span>
//       </div>
//     </div>
//   );
// };

// export default BookCard;

import React from "react";
import { useLocation } from "react-router-dom";

const BookCard = ({
  id,
  title,
  author,
  description,
  coverImage,
  price,
  rating,
  addToCart,
  removeFromCart,
  // Function to handle adding the book to the cart
}) => {
  //console.log("price", price, "id", id);
  const { pathname } = useLocation();

  // console.log("location", pathname);

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full h-48 object-cover" src={coverImage} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{author}</p>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <span className="text-lg font-bold">${price}</span>
        <span className="text-yellow-500">{rating} ★</span>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={() => {
            pathname == "/" ? addToCart(id) : removeFromCart(id);
          }}
          className={`w-full  ${
            pathname == "/"
              ? "bg-blue-500 hover:bg-blue-700"
              : "bg-red-500 hover:bg-red-700"
          }   text-white font-bold py-2 px-4 rounded`}
        >
          {pathname == "/" ? " Add to Cart" : "Remove from Cart"}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
