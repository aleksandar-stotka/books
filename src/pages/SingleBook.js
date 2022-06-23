import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { useState } from "react";
const url = `https://www.googleapis.com/books/v1/volumes?q=book&key=`;
const SingleBook = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getBooks() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        console.log(data);
        if (data.item) {
          console.log("yes");
        } else {
          setBooks(null);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
    getBooks();
  }, [id]);
  ////////////////////////////////////////////////////////////

  return <section className="section books-section">{id}</section>;
};

export default SingleBook;
