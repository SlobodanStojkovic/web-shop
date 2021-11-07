import { useEffect, useState } from "react";
import fetchProducts from "../../services/fetchProducts";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Main.css";

const Main = () => {
    const [products, setProducts] = useState([]);
    const [productsWithAmount, setProductsWithAmount] = useState([]);


    useEffect(() => {
        fetchProducts().then((products) => {
            setProducts(products);
        });
    }, []);

    useEffect(() => {
        let productAddingAmountProperty = products.map((product) => {
            return {
                ...product,
                amount: 1,
            };
        });
        setProductsWithAmount(productAddingAmountProperty);
    }, [products]);

    console.log(productsWithAmount);

    return (
        <div className="products">
            {productsWithAmount.length > 0 &&
                productsWithAmount.map((product) => {
                    return (
                        <SingleProduct
                            product={product}
                            key={product.id}
                            productsWithAmount={productsWithAmount}
                        />
                    );
                })}
        </div>
    );
};

export default Main;
