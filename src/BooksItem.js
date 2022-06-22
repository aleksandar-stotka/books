import React from "react";
import { useState, useEffect } from "react";
const urlBook =
  "https://www.googleapis.com/books/v1/volumes?q=book&key=AIzaSyCugL3EmH4MtIyW--UPxSimPKWjIA5KmAg";

const BookItems = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [searchTerm, setSearchTerm] = useState("a");

  ////fetch
  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          searchTerm +
          "&key=AIzaSyCugL3EmH4MtIyW--UPxSimPKWjIA5KmAg"
      );
      const data = await response.json();
      setBooks(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return <div>book items</div>;
};

export default BookItems;
