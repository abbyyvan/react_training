
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import { useState } from 'react';
import axios from 'axios'
import Wishlist from './components/Wishlist/Wishlist';

function App() {
  const [books, setBooks] = useState([])
  const [wishlist, setwishlist] = useState([])

  // const handleSearchSubmit = async (query) => {
  //   //here you would normallu fetch books based on the query
  //   try {
  //     const response = await axios.get(
  //         `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=20`
  //     )
  //     const data = await response.json();
  //     setBooks(data.items);
  //     console.log(books)
      
      
  //   } catch (error) {
  //     console.log("Error fetching books:", error)
  //   }
  //   console.log("search query", query)

  // }
  const handleSearchSubmit = async (query) => {
    if (query.trim()) {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=20`
      );
      const data = await response.json();
      // console.log("Fetched data:", data);  // 查看获取到的数据
      setBooks(data.items || []);
    }
  };

  const handleAddToWishlist = (book) => {
    console.log("book added to wishlist:", book)
    const result = wishlist.find((item)=>{
      return item.id === book.id
    })
    //if not saved in wishlist before
    if (result === undefined) {
      setwishlist([book, ...wishlist])//add to the top of the wishlist
    }
    console.log("in wishlist:", wishlist)
  }


  return (
    <div className="App">
      
      <div><h1>Book Search App</h1>
      <SearchBar onSubmit={handleSearchSubmit}></SearchBar>
      <SearchResults books={books} onAdd={handleAddToWishlist}></SearchResults></div>
      <div><Wishlist wishlist={wishlist}></Wishlist></div>
    </div>
  );
}

export default App;
