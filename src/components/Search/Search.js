import { useState } from "react";
import { useEffect } from "react";
import "./Search.css";

const Search = ({ setFilteredProducts, products }) => {
    
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const filterProducts = products.filter((product) => {
                return product.title.toLowerCase().includes(searchQuery);
            });
        setFilteredProducts(filterProducts);
    }, [searchQuery]);

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
