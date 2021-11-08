import { useEffect, useState } from "react";
import fetchProducts from "../../services/fetchProducts";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Main.css";

const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then((products) => {
            setProducts(products);
        });
    }, []);
    /* 
    useEffect(() => {
        let amountToUpdate = JSON.parse(localStorage.getItem("webShopSloba"));

        let productAddingAmountProperty = products.map((product) => {
            if (amountToUpdate !== null) {
                amountToUpdate.forEach((element) => {
                    
                    if (element.productId === product.id) {
                        return {
                            ...product,
                            amount: element.productAmount,
                        };
                    } else
                        return {
                            ...product,
                            amount: 0,
                        };
                });
            } else {
                return {
                    ...product,
                    amount: 0,
                };
            }
        });
        setProductsWithAmount(productAddingAmountProperty);
    }, [products, ]); */

    return (
        <div className="products">
            {products.length > 0 &&
                products.map((product) => {
                    return (
                        <SingleProduct
                            products={products}
                            product={product}
                            key={product.id}
                        />
                    );
                })}
        </div>
    );
};

export default Main;
