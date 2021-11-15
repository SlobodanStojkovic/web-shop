const fetchElectronics = () => {
    return fetch("https://fakestoreapi.com/products/category/electronics")
        .then((res) => res.json())
        .then((json) => json);
};

export default fetchElectronics;
