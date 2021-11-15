const fetchJewelery = () => {
    return fetch("https://fakestoreapi.com/products/category/jewelery")
        .then((res) => res.json())
        .then((json) => json);
};

export default fetchJewelery;
