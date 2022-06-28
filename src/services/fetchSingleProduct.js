const fetchSingleProduct = (productId) => {
  return fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => res.json())
    .then((json) => json);
};

export default fetchSingleProduct;
