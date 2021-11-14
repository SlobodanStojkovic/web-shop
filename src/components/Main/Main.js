import { useEffect, useState } from "react";
import fetchProducts from "../../services/fetchProducts";
import Search from "../Search/Search";
import SingleProduct from "../SingleProduct/SingleProduct";

import "./Main.css";

const Main = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [addedNotification, setAddedNotification] = useState(false);

    const addedNotificationTimer = () => {
        setAddedNotification(true);
        setTimeout(() => {
            setAddedNotification(false);
        }, 5000);
    };

    useEffect(() => {
        fetchProducts().then((products) => {
            setProducts(products);
            setFilteredProducts(products);
        });
    }, []);

    return (
        <>
            <Search
                products={products}
                setFilteredProducts={setFilteredProducts}
            />
            <div className="products">
                {addedNotification && (
                    <p className="addedToCartNotification">
                        The product has been added to the cart.
                    </p>
                )}
                {
                    /* filteredProducts.length > 0 && */
                    filteredProducts.map((product) => {
                        return (
                            <SingleProduct
                                product={product}
                                key={product.id}
                                filteredProducts={filteredProducts}
                                setAddedNotification={setAddedNotification}
                            />
                        );
                    })
                }
            </div>
        </>
    );
};

export default Main;
