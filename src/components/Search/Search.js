import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Search.css";

const Search = ({ setProductsToShow }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const productsFromRedux = useSelector((state) => state.productsReducer);

  useEffect(() => {
    const filterProducts = productsFromRedux.filter((product) => {
      return product.title.toLowerCase().includes(searchQuery);
    });
    setProductsToShow(filterProducts);
  }, [productsFromRedux, searchQuery]);

  return (
    <input
      className="searchInput"
      type="text"
      placeholder="Seach items..."
      onChange={(event) => setSearchQuery(event.target.value.toLowerCase())}
    ></input>
  );
};

export default Search;
