const fetchWomensClothing = () => {
  return fetch("https://fakestoreapi.com/products/category/women's%20clothing")
    .then((res) => res.json())
    .then((json) => json);
};

export default fetchWomensClothing;
