import { useEffect, useState } from "react";
import "./Cart.css";

const Cart = ({
    showCart,
    cartShowHandler,
    productsInCart,
    setProductsInCart,
}) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotal = () => {
        let total = 0;
        productsInCart.forEach((element) => {
            if (element.amount !== 0) {
                total += element.price * element.amount;
            }
        });
        return setTotalPrice(total);
    };

    const deleteCartProduct = (id) => {
        productsInCart.forEach((product) => {
            console.log(id);
            if (id === product.id) {
                product.removeItem();
            }
        });
    };

    useEffect(() => {
        calculateTotal();
    }, [showCart]);

    useEffect(() => {
        setProductsInCart(() =>
            JSON.parse(localStorage.getItem("webShopSloba"))
        );
    }, [showCart]);

    const clearCart = () => {
        localStorage.removeItem("webShopSloba");
        setProductsInCart([]);
        calculateTotal();
    };

    return showCart && productsInCart !== null ? (
        <div className="cartContainer">
            <button className="closeCartButton" onClick={cartShowHandler}>
                X
            </button>
            <h1>My cart</h1>

            <div className="productsInCart">
                {productsInCart &&
                    productsInCart.map((product, index) => {
                        return (
                            <div
                                className="singleCartProduct"
                                key={product.id + 100 * index}
                            >
                                <button
                                    className="deleteCartProduct"
                                    onClick={() => deleteCartProduct()}
                                >
                                    X
                                </button>
                                <img src={product.image} alt="product"></img>
                                <p className="productTitle">{product.title}</p>
                                <input
                                    type="number"
                                    defaultValue={product.amount}
                                    onChange={(event) => {
                                        product.amount = event.target.value;
                                        calculateTotal();
                                    }}
                                    min="0"
                                    max="10"
                                ></input>

                                <p>
                                    Price: $
                                    {(product.price * product.amount).toFixed(
                                        2
                                    )}
                                </p>
                                <p>Rating: {product.rating.rate}</p>
                            </div>
                        );
                    })}
            </div>
            <h2>Total: ${totalPrice.toFixed(2)} </h2>
            <button className="calculateTotalInCartButton">Send order</button>
            <button className="clearCartButton" onClick={clearCart}>
                Clear Cart
            </button>
        </div>
    ) : null;
};

export default Cart;
