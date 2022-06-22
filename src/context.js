import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [book, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
  });
};

export { AppContext, AppProvider };
