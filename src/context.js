import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import axios from "axios";
const url = "https://www.googleapis.com/books/v1/volumes?q=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);

      const data = await response.json();
      console.log(data);
      //////////////////////////////////
      const { items } = data;

      if (items) {
        const newBooks = items.map((item) => {
          const { description, title, averageRating, infoLink } =
            item.volumeInfo;
          const { smallThumbnail } = item.volumeInfo.imageLinks;
          const { id } = item;

          return {
            id: id,
            title: title,
            desc: description,
            link: infoLink,
            rating: averageRating,
            image: smallThumbnail,
          };
        });
        setBooks(newBooks);
        console.log(newBooks);
      } else {
        setBooks([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ loading, books, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
