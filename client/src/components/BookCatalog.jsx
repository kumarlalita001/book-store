import React from "react";
import BookCard from "./BookCard";

// const books = [
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     description:
//       "A classic novel of the Jazz Age, exploring themes of decadence, idealism, and social upheaval.",
//     coverImage:
//       "https://images.pexels.com/photos/3747279/pexels-photo-3747279.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
//     price: 10.99,
//     rating: 4.3,
//     genre: "Fiction",
//   },
//   {
//     title: "1984",
//     author: "George Orwell",
//     description:
//       "A dystopian novel set in a totalitarian society under constant surveillance.",
//     coverImage:
//       "https://images.pexels.com/photos/2228586/pexels-photo-2228586.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
//     price: 8.99,
//     rating: 4.8,
//     genre: "non-Fiction",
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     description:
//       "A profound novel on racial injustice and moral growth in the American South.",
//     coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794", // Replace with actual image URL
//     price: 12.99,
//     rating: 4.9,
//     genre: "Fiction",
//   },
//   {
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     description:
//       "A romantic novel that delves into the manners and matrimonial machinations of early 19th century England.",
//     coverImage:
//       "https://images.pexels.com/photos/4238507/pexels-photo-4238507.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
//     price: 9.99,
//     rating: 4.6,
//     genre: "non-Fiction",
//   },
//   {
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     description:
//       "A story of teenage angst and alienation narrated by the iconic Holden Caulfield.",
//     coverImage:
//       "https://images.pexels.com/photos/2090104/pexels-photo-2090104.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
//     price: 11.99,
//     rating: 4.4,
//     genre: "Fiction",
//   },
//   {
//     title: "Moby-Dick",
//     author: "Herman Melville",
//     description:
//       "An epic tale of the obsessive quest of Captain Ahab for revenge against the white whale, Moby-Dick.",
//     coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765", // Replace with actual image URL
//     price: 14.99,
//     rating: 4.2,
//     genre: "non-Fiction",
//   },
// ];

const BookCatalog = ({ books, addToCart }) => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book, index) => (
          <BookCard key={index} {...book} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default BookCatalog;
