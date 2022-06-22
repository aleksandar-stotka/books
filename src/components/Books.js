import React from "react";
import { Link } from "react-router-dom";

function Books({ id, title, desc, link, rating, image }) {
  return (
    <article className="books">
      <div className="img-container">
        <img src={image} alt={title} />
      </div>
      <div className="books-footer">
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href={link}>link</a>
        <span className="rating">{rating}</span>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
}

export default Books;
