import React, { useEffect, useState } from "react";
import FilterOptions from "./components/FilterOptions";
import SearchBar from "./components/SearchBar";
import BookCatalog from "./components/BookCatalog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description:
        "A classic novel of the Jazz Age, exploring themes of decadence, idealism, and social upheaval.",
      coverImage:
        "https://images.pexels.com/photos/3747279/pexels-photo-3747279.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      price: 10.99,
      rating: 4.3,
      genre: "Fiction",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      description:
        "A dystopian novel set in a totalitarian society under constant surveillance.",
      coverImage:
        "https://images.pexels.com/photos/2228586/pexels-photo-2228586.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      price: 8.99,
      rating: 4.8,
      genre: "non-Fiction",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description:
        "A profound novel on racial injustice and moral growth in the American South.",
      coverImage:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794", // Replace with actual image URL
      price: 12.99,
      rating: 4.9,
      genre: "Fiction",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description:
        "A romantic novel that delves into the manners and matrimonial machinations of early 19th century England.",
      coverImage:
        "https://images.pexels.com/photos/4238507/pexels-photo-4238507.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      price: 9.99,
      rating: 4.6,
      genre: "non-Fiction",
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      description:
        "A story of teenage angst and alienation narrated by the iconic Holden Caulfield.",
      coverImage:
        "https://images.pexels.com/photos/2090104/pexels-photo-2090104.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      price: 11.99,
      rating: 4.4,
      genre: "Fiction",
    },
    {
      id: 6,
      title: "Moby-Dick",
      author: "Herman Melville",
      description:
        "An epic tale of the obsessive quest of Captain Ahab for revenge against the white whale, Moby-Dick.",
      coverImage:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765", // Replace with actual image URL
      price: 14.99,
      rating: 4.2,
      genre: "non-Fiction",
    },
    {
      id: 7,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description:
        "A classic novel of the Jazz Age, exploring themes of decadence, idealism, and social upheaval.",
      coverImage:
        "https://images.pexels.com/photos/3747279/pexels-photo-3747279.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      price: 10.99,
      rating: 4.3,
      genre: "Fiction",
    },
    {
      id: 8,
      title: "1984",
      author: "George Orwell",
      description:
        "A dystopian novel set in a totalitarian society under constant surveillance.",
      coverImage:
        "https://images.pexels.com/photos/2228586/pexels-photo-2228586.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      price: 8.99,
      rating: 4.8,
      genre: "non-Fiction",
    },
    {
      id: 9,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description:
        "A profound novel on racial injustice and moral growth in the American South.",
      coverImage:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794", // Replace with actual image URL
      price: 12.99,
      rating: 4.9,
      genre: "Fiction",
    },
    {
      id: 10,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description:
        "A romantic novel that delves into the manners and matrimonial machinations of early 19th century England.",
      coverImage:
        "https://images.pexels.com/photos/4238507/pexels-photo-4238507.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      price: 9.99,
      rating: 4.6,
      genre: "non-Fiction",
    },
    {
      id: 11,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      description:
        "A story of teenage angst and alienation narrated by the iconic Holden Caulfield.",
      coverImage:
        "https://images.pexels.com/photos/2090104/pexels-photo-2090104.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      price: 11.99,
      rating: 4.4,
      genre: "Fiction",
    },
    {
      id: 12,
      title: "Moby-Dick",
      author: "Herman Melville",
      description:
        "An epic tale of the obsessive quest of Captain Ahab for revenge against the white whale, Moby-Dick.",
      coverImage:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765", // Replace with actual image URL
      price: 14.99,
      rating: 4.2,
      genre: "non-Fiction",
    },
  ]);

  const [cartBooks, setCartBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (query) => {
    if (query == "") {
      alert("search field Can't be empty");
      // setFilteredBooks([...books]);
      return;
    }
    const searchResults = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(searchResults);
  };

  function addToCart(id) {
    const filBook = books.filter((item) => item.id == id);

    setCartBooks((prev) => {
      return [...prev, filBook[0]];
    });
  }
  function removeFromCart(id) {
    const filBook = cartBooks.filter((item) => item.id != id);

    setCartBooks([...filBook]);
  }

  const handleFilterChange = (type, value) => {
    console.log(type, value, "------------");

    if (type === "price") {
      //let filtered = filteredBooks;

      if (value == "low-to-high") {
        setFilteredBooks([...filteredBooks.sort((a, b) => a.price - b.price)]);
      } else if (value == "high-to-low") {
        setFilteredBooks([...filteredBooks.sort((a, b) => b.price - a.price)]);
      } else {
        setFilteredBooks([...filteredBooks]);
        // Return original order if no valid order is specified
      }

      setFilteredBooks([...filtered]);
    }

    if (type === "genre") {
      let filtered = books;

      value == "All" ||
        (filtered = books.filter((item) => item.genre == value));

      setFilteredBooks(filtered);
    }

    // Implement filtering logic here based on type and value
    // e.g., filter by genre, price range, publication date
  };

  useEffect(() => {}, [books.length, filteredBooks]);

  return (
    <div>
      <Navbar cartCount={cartBooks?.length} />
      <Routes>
        <Route
          path={"/"}
          element={
            <div id="home">
              <SearchBar onSearch={handleSearch} />
              <FilterOptions onFilterChange={handleFilterChange} />
              <BookCatalog books={filteredBooks} addToCart={addToCart} />
            </div>
          }
        />

        <Route
          path="/cart"
          element={
            <Cart cartItems={cartBooks} removeFromCart={removeFromCart} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
