import { useEffect, useState } from "react";
import fetchProducts from "../../services/fetchProducts";
import "./Main.css";

const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then((products) => {
            setProducts(products);
        });
    }, []);
    console.log(products);

    return (
        <div className="products">
            {products.map((product) => {
                return (
                    <div className="singleProduct" key={product.id}>
                        <p>{product.title}</p>
                        <img src={product.image}></img>
                        <p>{product.price}</p>
                        <p>{product.rating.rate}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Main;
