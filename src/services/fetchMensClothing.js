const fetchMensClothing = () => {
    return fetch("https://fakestoreapi.com/products/category/men's%20clothing")
        .then((res) => res.json())
        .then((json) => json);
};

export default fetchMensClothing;
