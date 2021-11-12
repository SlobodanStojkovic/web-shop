import { useEffect, useState } from "react";
import fetchProducts from "../../services/fetchProducts";
import Search from "../Search/Search";
import SingleProduct from "../SingleProduct/SingleProduct";

import "./Main.css";

const Main = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [addedNotification, setAddedNotification] = useState(false);

    useEffect(() => {
        fetchProducts().then((products) => {
            setProducts(products);
            setFilteredProducts(products);
        });
    }, []);

    const addedNotificationTimer = () => {
        setAddedNotification(true);
        setTimeout(() => {
            setAddedNotification(false);
        }, 5000);
    };

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
                                products={products}
                                product={product}
                                key={product.id}
                                setAddedNotification={addedNotificationTimer}
                            />
                        );
                    })
                }
            </div>
        </>
    );
};

export default Main;
