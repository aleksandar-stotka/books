import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [book, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=book&key=AIzaSyCugL3EmH4MtIyW--UPxSimPKWjIA5KmAg"
      );
      const data = await response.json();
      console.log(data);
      //////////////////////////////////
      const { items } = data;

      if (items) {
        const newBooks = items.map((item) => {
          const { description, title, averageRating } = item.volumeInfo;
          const { id, selfLink } = item;

          return {
            id: id,
            title: title,
            desc: description,
            link: selfLink,
            raiting: averageRating,
          };
        });
        setBooks(newBooks);
        console.log(newBooks);
      }
    } catch (error) {
      console.log(error);
    }
  }, searchTerm);

  useEffect(() => {
    fetchBooks();
  }, []);

  return <AppContext.Provider value="heloo">{children}</AppContext.Provider>;
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
