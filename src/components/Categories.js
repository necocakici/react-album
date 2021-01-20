import React, { useContext } from "react";
import { AlbumsContext } from "../App";

import { Link } from "react-router-dom";

const Categories = () => {
  const context = useContext(AlbumsContext);

  return (
    <div className="btn-container">
      <Link to="/">
        <button
          onClick={() => context.filterCategories(1)}
          className="btn btn-success"
        >
          Hepsi
        </button>
      </Link>
      <Link to="/">
        <button
          onClick={() => context.filterCategories("Rap")}
          className="btn btn-warning"
        >
          Rap
        </button>
      </Link>
      <Link to="/">
        <button
          onClick={() => context.filterCategories("Pop")}
          className="btn btn-warning"
        >
          Pop
        </button>
      </Link>
      <Link to="/">
        <button
          onClick={() => context.filterCategories("Alternative")}
          className="btn btn-warning"
        >
          Alternative
        </button>
      </Link>
      <Link to="/">
        <button
          onClick={() => context.filterCategories("R&B")}
          className="btn btn-warning"
        >
          R&B
        </button>
      </Link>
    </div>
  );
};

export default Categories;
