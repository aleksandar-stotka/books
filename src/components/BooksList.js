import React from "react";
import Books from "./Books";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

function BooksList() {
  const { books, loading } = useGlobalContext();
  ///////////////////////////////////////////////////
  if (loading) {
    return <Loading />;
  }
  if (books.length < 1) {
    return (
      <h2 className="section-title">no books matched your search criteria</h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">books</h2>
      <div className="books-center">
        {books.map((item) => {
          return <Books key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default BooksList;
